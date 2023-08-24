"use client";

import { Dialog, Button, TextArea, Text, Flex } from "@radix-ui/themes";

export default function EditPostDialog() {
  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Text>Edit</Text>
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
