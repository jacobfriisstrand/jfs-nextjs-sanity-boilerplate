import type { VariantProps } from "class-variance-authority";

import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "border px-16 py-8 rounded-base focus-visible:focus-outline cursor-pointer active:scale-95 duration-normal",
  {
    variants: {
      variant: {
        primary: "bg-brand text-light border-light hover:bg-light hover:text-brand hover:border-brand",
        secondary: "bg-light text-brand border-brand hover:bg-brand hover:text-light",
      },
      size: {
        default: "text-sm",
        small: "text-xs",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
