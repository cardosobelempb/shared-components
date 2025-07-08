import clsx from "clsx";
import type { ElementType } from "react";
import React from "react";
import { HeadingRootProps, headingVariants } from "./heading.type";

export default function HeadingRoot<T extends ElementType>({
  as = "h1",
  className,
  children,
  sf,
  align,
  decoration,
  overflow,
  spacing,
  transform,
  weight,
  wrap,
  ...props
}: HeadingRootProps<T>) {
  const classes = headingVariants({
    sf,
    align,
    decoration,
    overflow,
    spacing,
    transform,
    weight,
    wrap,
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
