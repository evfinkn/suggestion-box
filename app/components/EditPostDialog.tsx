import {
  Button,
  TextArea,
  Text,
  Flex,
  DialogRoot,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "@radix-ui/themes";

export default function EditPostDialog() {
  return (
    <DialogRoot>
      <DialogTrigger>
        <Text>Edit</Text>
      </DialogTrigger>
      <DialogContent style={{ maxWidth: 450 }}>
        <DialogTitle>Edit post</DialogTitle>
        <DialogDescription>Edit your post's content.</DialogDescription>
        <TextArea aria-label="Message" />
        <Flex gap="3" mt="4" justify="end">
          <DialogClose>
            <Button variant="soft" color="gray">
              Cancel
            </Button>
          </DialogClose>
          <DialogClose>
            <Button>Save</Button>
          </DialogClose>
        </Flex>
      </DialogContent>
    </DialogRoot>
  );
}
