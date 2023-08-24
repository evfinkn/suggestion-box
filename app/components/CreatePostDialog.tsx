"use client";

import { Dialog, Button, TextArea, Flex } from "@radix-ui/themes";

export default function CreatePostDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>Post</Button>
      </Dialog.Trigger>
      <Dialog.Content style={{ maxWidth: 450 }}>
        <Dialog.Title>Post message</Dialog.Title>
        <Dialog.Description>
          Post a message to the anonymous box.
        </Dialog.Description>
        <TextArea placeholder="Type your message..." aria-label="Message" />
        <Flex gap="3" mt="4" justify="end">
          <Dialog.Close>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </Dialog.Close>
          <Dialog.Close>
            <Button>Post</Button>
          </Dialog.Close>
        </Flex>
      </Dialog.Content>
    </Dialog.Root>
  );
}
