import { Text } from "@radix-ui/themes";

export default function DateText({ date }: { date: Date }) {
  // e.g., 5:30 PM or 10:12 AM
  const timeString = date.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "numeric",
  });
  // e.g., Oct 4, 2023
  const dateString = date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <Text size="1" color="gray">
      {timeString} - {dateString}
    </Text>
  );
}
