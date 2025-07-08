import clsx from "clsx";
import type { ElementType } from "react";
import React from "react";
import { BoxRootProps, boxVariants } from "./box.type";
import { computeFlexClasses } from "../types/flex";
import { computeHClasses } from "../types/sh";
import { computeWClasses } from "../types/sw";

export default function BoxRoot<T extends ElementType>({
  as = "div",
  className,
  children,
  flex,
  round,
  h,
  w,
  ...props
}: BoxRootProps<T>) {
  const baseClasses = boxVariants({ round });
  const flexClasses = computeFlexClasses(flex);
  const hClasses = computeHClasses(h);
  const wClasses = computeWClasses(w);

  return React.createElement(
    as,
    {
      className: clsx(baseClasses, flexClasses, hClasses, wClasses, className),
      ...props,
    },
    children
  );
}

/*
clsx("base-class", condition && "conditional-class", isActive ? "active" : "inactive");
*/
