import { Button, DialogClose } from "@radix-ui/themes";

interface CancelButtonProps
  extends React.ComponentPropsWithoutRef<typeof Button> {}

export function CancelButton(props: CancelButtonProps) {
  return (
    <Button variant="soft" color="gray" type="button" {...props}>
      Cancel
    </Button>
  );
}

export function DialogCancelButton(props: CancelButtonProps) {
  return (
    <DialogClose>
      <CancelButton {...props} />
    </DialogClose>
  );
}
