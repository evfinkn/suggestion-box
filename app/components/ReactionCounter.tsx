"use client";

import { useState } from "react";
import { Button, Text, Tooltip } from "@radix-ui/themes";

export default function ReactionCounter({
  emoji,
  tooltip,
  count = 0,
  size = "1",
  reacted = false,
}: {
  emoji: string;
  tooltip: string;
  count?: number;
  size?: "1" | "2" | "3" | "4";
  reacted?: boolean;
}) {
  const [reactionCount, setReactionCount] = useState(count);
  const [isReacted, setIsReacted] = useState(reacted);
  const fontSize = {
    "1": 14,
    "2": 18,
    "3": 22,
    "4": 30,
  }[size];

  return (
    <Tooltip content={tooltip}>
      <Button
        size={size}
        variant={isReacted ? "surface" : "outline"}
        color={isReacted ? undefined : "gray"}
        highContrast={isReacted}
        style={{ maxWidth: "fit-content" }}
        onClick={() => {
          setReactionCount((prev) => prev + (isReacted ? -1 : 1));
          setIsReacted((prev) => !prev);
        }}
      >
        <Text weight="regular" style={{ fontSize }}>
          {/* color: initial because otherwise emoji is lighter than it should be */}
          <span style={{ color: "initial", fontSize: fontSize + 2 }}>
            {emoji}
          </span>{" "}
          {reactionCount}
        </Text>
      </Button>
    </Tooltip>
  );
}
