import clsx from "clsx";
import type { ElementType } from "react";
import React from "react";
import { BoxRootProps, boxVariants } from "./box.type";
import { computeFlexClasses } from "../types/flex.type";
import { computeHClasses } from "../types/height.type";
import { computeWClasses } from "../types/width.type";
import { computeVariantClasses } from "../types/variant.type";

export default function BoxRoot<T extends ElementType>({
  as = "div",
  className,
  children,
  dfflex,
  round,
  dfheight,
  dfwidth,
  dfvariant,
  ...props
}: BoxRootProps<T>) {
  const baseClasses = boxVariants({ round });
  const flexClasses = computeFlexClasses(dfflex);
  const hClasses = computeHClasses(dfheight);
  const wClasses = computeWClasses(dfwidth);
  const variantClasses = computeVariantClasses(dfvariant);

  return React.createElement(
    as,
    {
      className: clsx(
        baseClasses,
        flexClasses,
        hClasses,
        wClasses,
        variantClasses,
        className
      ),
      ...props,
    },
    children
  );
}

/*
clsx("base-class", condition && "conditional-class", isActive ? "active" : "inactive");
*/
