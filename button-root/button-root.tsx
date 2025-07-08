"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { FaSpinner } from "react-icons/fa";
import React from "react";

const buttonVariants = cva(
  "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none gap-2",
  {
    variants: {
      variant: {
        default: "bg-blue-600 text-white hover:bg-blue-700",
        secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        outline:
          "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
      },
      size: {
        sm: "h-9 px-3 text-sm rounded-md",
        md: "h-10 px-4 text-base rounded-md",
        lg: "h-11 px-5 text-lg rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  isLoading?: boolean;
  loadingText?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}

const ButtonRoot = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      isLoading = false,
      loadingText,
      startIcon,
      endIcon,
      children,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        disabled={isLoading || props.disabled}
        {...props}
      >
        {isLoading ? <FaSpinner className="animate-spin h-4 w-4" /> : startIcon}
        {isLoading ? loadingText ?? children : children}
        {!isLoading && endIcon}
      </Comp>
    );
  }
);
ButtonRoot.displayName = "ButtonRoot";

export { ButtonRoot, buttonVariants };
