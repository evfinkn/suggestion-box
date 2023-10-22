"use server";

import { cookies } from "next/headers";
import { revalidatePath } from "next/cache";

import prisma from "@/db/prisma";
import Session from "@/lib/session";

const createUserSession = async () => {
  const { id: userId } = await prisma.user.create({ data: {} });
  const session = new Session({ userId });
  await session.persist(cookies());
  return session;
};

const getUserSession = async (): Promise<Session> => {
  try {
    return await Session.fromCookies(cookies());
  } catch {
    return await createUserSession();
  }
};

interface SuccessPostState {
  status: "success";
}

interface ErrorPostState {
  status: "error";
  error: string;
}

export type PostState = SuccessPostState | ErrorPostState | undefined;

export const createPost = async (
  _: PostState,
  data: FormData
): Promise<PostState> => {
  const content = data.get("content") as string;
  const session = await getUserSession();
  await prisma.post.create({
    data: {
      content,
      author: {
        connect: { id: session.userId! },
      },
    },
  });
  revalidatePath("/");
  return { status: "success" };
};
