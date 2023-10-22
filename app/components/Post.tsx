"use client";

import React, { useState } from "react";
import { Box, Card, Flex, Separator, Text } from "@radix-ui/themes";

import { type Post as PostData } from "@prisma/client";

import DateText from "./DateText";
import MoreOptionsMenu from "./MoreOptionsMenu";
import ReactionCounter from "./ReactionCounter";

export default function Post({ postData }: { postData: PostData }) {
  const [text, setText] = useState(postData.content);
  return (
    // <Card style={{ minWidth: "250px", padding: 7 }}>
    <Card>
      <Box px="3" py="1">
        <Flex justify="between" mb="3">
          <DateText date={postData.createdAt} />
          {/* <MoreOptionsMenu
            postId={postData.id}
            postText={text}
            onEdit={setText}
          /> */}
        </Flex>
        <Text>{text}</Text>
        <Separator my="3" size="4" />
        <Flex justify="between" mt="4">
          <Flex gap="2">
            <ReactionCounter emoji="👍" tooltip="thumbs up" />
            <ReactionCounter emoji="👎" tooltip="thumbs down" />
          </Flex>
        </Flex>
      </Box>
    </Card>
  );
}
