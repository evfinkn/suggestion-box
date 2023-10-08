"use client";

import { useState } from "react";
import {
  Button,
  TextArea,
  Flex,
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@radix-ui/themes";

import { createPost } from "@/app/actions";

import { SubmitButton } from "./SubmitButton";

export default function CreatePostDialog() {
  const [open, setOpen] = useState(false);
  const createPostAndClose: (data: FormData) => void = createPost.bind(null, setOpen);
  return (
    <DialogRoot open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button style={{ maxWidth: "fit-content" }}>Post</Button>
      </DialogTrigger>
      <DialogContent style={{ maxWidth: 450 }}>
        <DialogTitle>Post message</DialogTitle>
        <DialogDescription>
          Post a message to the anonymous box.
        </DialogDescription>
        <form action={createPostAndClose} method="POST">
          <TextArea
            name="content"
            placeholder="Type your message..."
            aria-label="Message"
            rows={10}
            required
          />
          <Flex gap="3" mt="4" justify="end">
            <DialogClose>
              <Button variant="soft" color="gray" type="button">
                Cancel
              </Button>
            </DialogClose>
            <SubmitButton>Post</SubmitButton>
          </Flex>
        </form>
      </DialogContent>
    </DialogRoot>
  );
}
