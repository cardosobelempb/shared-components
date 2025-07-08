import clsx from "clsx";
import type { ElementType } from "react";
import React from "react";
import { BoxRootProps, boxVariants } from "./box.type";
import { computeFlexClasses } from "../types/flex";

export default function BoxRoot<T extends ElementType>({
  as = "div",
  className,
  children,
  flex,
  round,
  sh,
  sw,
  ...props
}: BoxRootProps<T>) {
  const baseClasses = boxVariants({ round, sh, sw });
  const flexClasses = computeFlexClasses(flex);

  return React.createElement(
    as,
    {
      className: clsx(baseClasses, flexClasses, className),
      ...props,
    },
    children
  );
}

/*
clsx("base-class", condition && "conditional-class", isActive ? "active" : "inactive");
*/
