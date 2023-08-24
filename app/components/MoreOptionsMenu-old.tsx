"use client";

// import { DropdownMenu, IconButton } from "@radix-ui/themes";
// import EditPostDialog from "./EditPostDialog";
import {
  Dialog,
  Button,
  TextArea,
  Text,
  Flex,
  DropdownMenu,
  IconButton,
} from "@radix-ui/themes";
import {
  DotsHorizontalIcon,
  ArchiveIcon,
  TrashIcon,
} from "@radix-ui/react-icons";

function EditPostDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <DropdownMenu.Item onSelect={(e) => e.preventDefault()}>
          Edit
        </DropdownMenu.Item>
      </Dialog.Trigger>
      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Edit post</Dialog.Title>
        <TextArea aria-label="Message" />
        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>Save</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}

export default function MoreOptionsMenu() {
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <IconButton variant="ghost">
          <DotsHorizontalIcon />
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content variant="soft">
        {/* <DropdownMenu.Item> */}
        <EditPostDialog />
        {/* </DropdownMenu.Item> */}
        <DropdownMenu.Item>Archive</DropdownMenu.Item>
        <DropdownMenu.Item color="red">Delete</DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
