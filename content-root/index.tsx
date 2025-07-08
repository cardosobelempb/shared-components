import clsx from "clsx";
import type { ElementType } from "react";
import React from "react";
import { ContentRootProps, contentVariants } from "./content.type";

export default function ContentRoot<T extends ElementType>({
  as = "div",
  className,
  children,
  flex,
  height,
  width,
  round,
  ...props
}: ContentRootProps<T>) {
  const classes = contentVariants({
    flex,
    height,
    width,
    round,
  });

  return React.createElement(
    as,
    {
      className: clsx(classes, className),
      ...props,
    },
    children
  );
}

/*
clsx("base-class", condition && "conditional-class", isActive ? "active" : "inactive");
*/
