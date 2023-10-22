"use client";

import { useEffect, useRef, useState } from "react";
import { experimental_useFormState as useFormState } from "react-dom";
import {
  Button,
  TextArea,
  Flex,
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from "@radix-ui/themes";

import { createPost } from "@/app/actions";

import { DialogCancelButton } from "./CancelButton";
import { SubmitButton } from "./SubmitButton";

export default function CreatePostDialog() {
  const [open, setOpen] = useState(false);
  const [formState, formAction] = useFormState(createPost, undefined);

  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (formState?.status === "success") {
      setOpen(false);
      if (textAreaRef.current) {
        textAreaRef.current.value = "";
      }
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
      });
    }
  }, [formState]);

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
        <form action={formAction} method="POST">
          <TextArea
            ref={textAreaRef}
            name="content"
            placeholder="Type your message..."
            aria-label="Message"
            rows={10}
            required
          />
          <Flex gap="3" mt="4" justify="end">
            <DialogCancelButton />
            <SubmitButton>Post</SubmitButton>
          </Flex>
        </form>
      </DialogContent>
    </DialogRoot>
  );
}
