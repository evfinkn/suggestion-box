import { Flex, Theme } from "@radix-ui/themes";
import ToggleThemeButton from "@/app/components/ToggleThemeButton";
import CreatePostDialog from "@/app/components/CreatePostDialog";
// import MoreOptionsMenu from "@/components/MoreOptionsMenu";
import Post from "@/app/components/Post";

import prisma from "@/db/prisma";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

export default async function App() {
  const posts = await prisma.post.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <Theme accentColor="iris" radius="large">
      <Flex align="center" justify="center" style={{ maxWidth: 1250 }}>
        <Flex direction="column" gap="2">
          <ToggleThemeButton />
          {posts.map((post) => (
            <Post key={post.id}>{post.content}</Post>
          ))}
          <CreatePostDialog />
        </Flex>
      </Flex>
    </Theme>
  );
}
