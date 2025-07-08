// components/IconRoot.tsx
"use client";

import clsx from "clsx";
import React from "react";
import type {
  ComponentPropsWithoutRef,
  ElementType,
  JSX,
  MouseEvent,
} from "react";
import { iconVariants, type IconVariants } from "./icon.type";

type IconRootProps<T extends ElementType = "span"> =
  ComponentPropsWithoutRef<T> &
    IconVariants & {
      as?: keyof JSX.IntrinsicElements;
      className?: string;
      children?: React.ReactNode;
      spin?: boolean;
    };

export default function IconRoot<T extends ElementType = "span">({
  as = "span",
  className,
  children,
  size,
  center,
  variant,
  disabled,
  onClick,
  spin,
  ...props
}: IconRootProps<T>) {
  const classes = iconVariants({ size, center, variant, disabled });

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    onClick?.(e);
  };

  return React.createElement(
    as,
    {
      onClick: handleClick,
      className: clsx(classes, spin && "animate-spin", className),
      ...props,
    },
    children
  );
}
