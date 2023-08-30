"use client";

import React, { useState, useRef } from "react";

import {
  Button,
  Dialog,
  DropdownMenu,
  Flex,
  IconButton,
  TextArea,
} from "@radix-ui/themes";
import { DotsHorizontalIcon } from "@radix-ui/react-icons";

type DropdownMenuItemElement = React.ElementRef<typeof DropdownMenu.Item>;
interface DialogItemHandlers {
  onSelect?: (event: Event) => void;
  onOpenChange?: (open: boolean) => void;
}
interface DialogItemProps extends DialogItemHandlers {
  triggerChildren: React.ReactNode;
  children: React.ReactNode;
  itemProps?: React.ComponentPropsWithoutRef<typeof DropdownMenu.Item>;
  rootProps?: React.ComponentPropsWithoutRef<typeof Dialog.Root>;
  triggerProps?: React.ComponentPropsWithoutRef<typeof Dialog.Trigger>;
  contentProps?: React.ComponentPropsWithoutRef<typeof Dialog.Content>;
}
// This is mostly copied from:
// https://codesandbox.io/s/dropdownmenu-dialog-items-r9sq1q?file=/src/App.js
const DialogItem = React.forwardRef<DropdownMenuItemElement, DialogItemProps>(
  (
    {
      triggerChildren,
      children,
      onSelect,
      onOpenChange,
      itemProps = {},
      rootProps = {},
      triggerProps = {},
      contentProps = {},
    },
    forwardedRef
  ) => {
    return (
      <Dialog.Root {...rootProps} onOpenChange={onOpenChange}>
        <Dialog.Trigger {...triggerProps}>
          <DropdownMenu.Item
            {...itemProps}
            ref={forwardedRef}
            onSelect={(event) => {
              event.preventDefault();
              onSelect && onSelect(event);
            }}
          >
            {triggerChildren}
          </DropdownMenu.Item>
        </Dialog.Trigger>
        <Dialog.Content {...contentProps}>{children}</Dialog.Content>
      </Dialog.Root>
    );
  }
);

// omit children because we need to make it optional
interface BasicDialogItemProps extends Omit<DialogItemProps, "children"> {
  title: string;
  description: string;
  close: React.ReactNode;
  children?: React.ReactNode;
  maxWidth?: string | number;
}
function BasicDialogItem({
  title,
  description,
  close,
  children,
  maxWidth = 450,
  ...props
}: BasicDialogItemProps) {
  return (
    <DialogItem {...props} contentProps={{ style: { maxWidth } }}>
      <Dialog.Title>{title}</Dialog.Title>
      <Dialog.Description>{description}</Dialog.Description>
      {children}
      <Flex gap="3" mt="4" justify="end">
        <Dialog.Close>
          <Button variant="soft" color="gray">
            Cancel
          </Button>
        </Dialog.Close>
        <Dialog.Close>{close}</Dialog.Close>
      </Flex>
    </DialogItem>
  );
}

function EditDialog(handlers: DialogItemHandlers) {
  return (
    <BasicDialogItem
      triggerChildren="Edit"
      title="Edit post"
      description="Edit your post's content."
      close={<Button>Save</Button>}
      maxWidth={600}
      {...handlers}
    >
      <TextArea
        aria-label="Post content"
        rows={10}
      />
    </BasicDialogItem>
  );
}

function ArchiveDialog(handlers: DialogItemHandlers) {
  return (
    <BasicDialogItem
      triggerChildren="Archive"
      title="Archive post"
      description="Are you sure you want to archive this post?"
      close={<Button>Archive</Button>}
      {...handlers}
    />
  );
}

function DeleteDialog(handlers: DialogItemHandlers) {
  return (
    <BasicDialogItem
      triggerChildren="Delete"
      title="Delete post"
      description="Are you sure you want to delete this post?"
      close={<Button color="red">Delete</Button>}
      itemProps={{ color: "red" }}
      {...handlers}
    />
  );
}

type DropdownMenuTriggerElement = React.ElementRef<typeof DropdownMenu.Trigger>;
// The parts for focus and open/close are mostly copied from:
// https://codesandbox.io/s/dropdownmenu-dialog-items-r9sq1q?file=/src/App.js
export default function MoreOptionsMenu() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const dropdownTriggerRef = useRef<DropdownMenuTriggerElement>(null);
  const focusRef = useRef<HTMLElement | null>(null);

  function handleDialogItemSelect() {
    focusRef.current = dropdownTriggerRef.current;
  }

  function handleDialogItemOpenChange(open: boolean) {
    setDialogOpen(open);
    if (open === false) {
      setDropdownOpen(false);
      // set pointer-events because for some reason it gets left on "none"
      document.body.style.pointerEvents = "";
    }
  }

  const handlers = {
    onSelect: handleDialogItemSelect,
    onOpenChange: handleDialogItemOpenChange,
  }

  return (
    <DropdownMenu.Root open={dropdownOpen} onOpenChange={setDropdownOpen}>
      <DropdownMenu.Trigger ref={dropdownTriggerRef}>
        <IconButton variant="ghost">
          <DotsHorizontalIcon />
        </IconButton>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content
        // sideOffset={3}
        variant="soft"
        hidden={dialogOpen}
        onCloseAutoFocus={(event) => {
          if (focusRef.current) {
            focusRef.current.focus();
            focusRef.current = null;
            event.preventDefault();
          }
        }}
      >
        <EditDialog {...handlers} />
        <ArchiveDialog {...handlers} />
        <DeleteDialog {...handlers} />
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
