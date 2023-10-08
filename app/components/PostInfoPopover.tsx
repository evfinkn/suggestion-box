import { IconButton, Popover, Text } from "@radix-ui/themes";
import { InfoCircledIcon } from "@radix-ui/react-icons";

export default function PostInfoPopover() {
  return (
    <Popover.Root>
      <Popover.Trigger>
        <IconButton variant="ghost">
          <InfoCircledIcon />
        </IconButton>
      </Popover.Trigger>
      <Popover.Content style={{ width: 360 }}>
        <Text>
          Post an anonymous message that other users can read and react to.
          Users can also vote to archive the message, (moving it below all
          non-archived posts | making it viewable only in the "Archived" tab |
          ?). If you don't clear your cookies, you'll be able to edit, archive,
          and delete your posts. If you edit your post, other users will see
          that the post has been edited but won't be able to see previous
          versions of the post. Archiving your post skips the need for a user
          vote and immediately archives it. Deleting your post completely
          removes it from the timeline.
        </Text>
      </Popover.Content>
    </Popover.Root>
  );
}
