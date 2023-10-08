// taken from https://github.com/m1guelpf/armchair/blob/main/src/lib/session.ts

import { COOKIE_NAME } from "./consts";
import { NextRequest, NextResponse } from "next/server";
import { sealData, unsealData } from "iron-session/edge";
import { ResponseCookies } from "next/dist/compiled/@edge-runtime/cookies";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";

export const SESSION_OPTIONS = {
  ttl: 0, // Session never expires
  password: process.env.SESSION_SECRET!,
};

export type SessionData = {
  userId?: string;
};

class Session {
  userId?: string;

  constructor(session?: SessionData) {
    this.userId = session?.userId;
  }

  static async fromCookies(cookies: ReadonlyRequestCookies): Promise<Session> {
    const sessionCookie = cookies.get(COOKIE_NAME)?.value;

    if (!sessionCookie) throw new Error("Not authenticated");
    return new Session(
      await unsealData<SessionData>(sessionCookie, SESSION_OPTIONS)
    );
  }

  static async fromRequest(req: NextRequest): Promise<Session> {
    const sessionCookie = req.cookies.get(COOKIE_NAME)?.value;

    if (!sessionCookie) return new Session();
    return new Session(
      await unsealData<SessionData>(sessionCookie, SESSION_OPTIONS)
    );
  }

  clear(res: NextResponse | ResponseCookies): Promise<void> {
    this.userId = undefined;

    return this.persist(res);
  }

  toJSON(): SessionData {
    return { userId: this.userId };
  }

  async persist(res: NextResponse | ResponseCookies): Promise<void> {
    let cookies: ResponseCookies;
    if (isCookies(res)) cookies = res;
    else cookies = res.cookies;

    cookies.set(COOKIE_NAME, await sealData(this.toJSON(), SESSION_OPTIONS), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });
  }
}

const isCookies = (
  cookies: NextResponse | ResponseCookies
): cookies is ResponseCookies => {
  return (cookies as ResponseCookies).set !== undefined;
};

export default Session;
