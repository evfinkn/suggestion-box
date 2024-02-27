import {
  Box,
  Flex,
  TabsRoot,
  TabsList,
  TabsTrigger,
  TabsContent,
  MarginProps,
} from "@radix-ui/themes";

import prisma from "@/db/prisma";

import { type Post as PostData } from "@prisma/client";

import CreatePostDialog from "./CreatePostDialog";
import Post from "./Post";
import ToggleThemeButton from "./ToggleThemeButton";

export const dynamic = "auto",
  dynamicParams = true,
  revalidate = 0,
  fetchCache = "auto",
  runtime = "nodejs",
  preferredRegion = "auto";

function PostsTab({ value, posts }: { value: string; posts: PostData[] }) {
  return (
    <TabsContent value={value}>
      <Flex direction="column" gap="3" width="100%">
        {posts.map((post) => (
          <Post key={post.id} postData={post} />
        ))}
      </Flex>
    </TabsContent>
  );
}

export default async function PostTypeTabs() {
  const allPosts = await prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });
  const activePosts = allPosts.filter((post) => !post.archived);
  const archivedPosts = allPosts.filter((post) => post.archived);

  const boxMarginX: MarginProps["mx"] = {
    initial: "0",
    sm: "5",
    md: "9",
  };

  return (
    <TabsRoot defaultValue="active">
      <TabsList asChild>
        <Box position="relative">
          <Flex justify="center" width="100%">
            <TabsTrigger value="active">Active</TabsTrigger>
            <TabsTrigger value="archived">Archived</TabsTrigger>
            <TabsTrigger value="all">All</TabsTrigger>
          </Flex>
          <Flex
            position="absolute"
            width="100%"
            height="100%"
            top="0"
            left="0"
            align="center"
            justify="end"
            gap="3"
          >
            <CreatePostDialog />
            <ToggleThemeButton mr="4" />
          </Flex>
        </Box>
      </TabsList>

      <Box height="3" />

      <Box mx={boxMarginX}>
        <Box mx={boxMarginX}>
          <PostsTab value="active" posts={activePosts} />
          <PostsTab value="archived" posts={archivedPosts} />
          <PostsTab value="all" posts={allPosts} />
        </Box>
      </Box>
    </TabsRoot>
  );
}
