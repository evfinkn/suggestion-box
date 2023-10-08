// Most of this code is from
// https://nextjs.org/docs/app/building-your-application/data-fetching/forms-and-mutations#displaying-loading-state

"use client";

import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";

import { Button } from "@radix-ui/themes";

type SubmitButtonElement = React.ElementRef<typeof Button>;
interface SubmitButtonProps
  extends React.ComponentPropsWithoutRef<typeof Button> {}

export const SubmitButton = React.forwardRef<
  SubmitButtonElement,
  SubmitButtonProps
>(function SubmitButton(props, ref) {
  const { pending } = useFormStatus();

  // {...props} will pass children as well
  // put everything after props to make sure they're not overwritten
  return <Button {...props} ref={ref} type="submit" aria-disabled={pending} />;
});
