"use client";

import React, { useState } from "react";
import { Card, Flex, Text } from "@radix-ui/themes";
import MoreOptionsMenu from "./MoreOptionsMenu";
import ReactionCounter from "./ReactionCounter";

export default function Post({ children }: { children: string }) {
  const [text, setText] = useState(children);
  return (
    <Card style={{ minWidth: "250px", maxWidth: "750px", padding: 7 }}>
      <Text>{text}</Text>
      <Flex justify="between" mt="3">
        <Flex gap="2">
          <ReactionCounter emoji="👍" tooltip="thumbs up" />
          <ReactionCounter emoji="👎" tooltip="thumbs down" />
        </Flex>
        <MoreOptionsMenu postText={text} onEdit={setText} />
      </Flex>
    </Card>
  );
}
