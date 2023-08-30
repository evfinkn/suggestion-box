import React, { useState } from "react";
import { Card, Flex, Text } from "@radix-ui/themes";
import MoreOptionsMenu from "./MoreOptionsMenu";
import ReactionCounter from "./ReactionCounter";

export default function Post({ text }: { text: string }) {
  const [postText, setPostText] = useState(text);
  return (
    <Card style={{ maxWidth: "750px", padding: 7 }}>
      <Text>{postText}</Text>
      <Flex justify="between" mt="3">
        <Flex gap="2">
          <ReactionCounter emoji="👍" tooltip="thumbs up" />
          <ReactionCounter emoji="👎" tooltip="thumbs down" />
        </Flex>
        <MoreOptionsMenu postText={postText} onEdit={setPostText} />
      </Flex>
    </Card>
  );
}
