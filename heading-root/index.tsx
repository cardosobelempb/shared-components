import clsx from "clsx";
import type { ElementType } from "react";
import React from "react";
import { HeadingRootProps, headingVariants } from "./heading.type";
import { computeFontClasses } from "../types/font.type";

export default function HeadingRoot<T extends ElementType>({
  as = "h1",
  className,
  children,
  dffont,
  ...props
}: HeadingRootProps<T>) {
  const baseClasses = headingVariants({});

  const fontClasses = computeFontClasses(dffont);

  return React.createElement(
    as,
    {
      className: clsx(baseClasses, fontClasses, className),
      ...props,
    },
    children
  );
}

/*
clsx("base-class", condition && "conditional-class", isActive ? "active" : "inactive");
*/
