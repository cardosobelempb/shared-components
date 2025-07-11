import clsx from "clsx";
import type { ElementType } from "react";
import React from "react";
import { ContentRootProps, contentVariants } from "./content.type";
import { computeFlexClasses } from "../types/flex.type";
import { computeHClasses } from "../types/height.type";
import { computeWClasses } from "../types/width.type";
import { computeVariantClasses } from "../types/variant.type";
import { computeMarginClasses } from "../types/margin.type";
import { computePaddingClasses } from "../types/padding.type";

export default function ContentRoot<T extends ElementType>({
  as = "div",
  className,
  children,
  dfflex,
  dfheight,
  dfwidth,
  margin,
  dfpadding,
  dfmargin,
  dfvariant,
  round,
  ...props
}: ContentRootProps<T>) {
  const flexClasses = computeFlexClasses(dfflex);
  const hClasses = computeHClasses(dfheight);
  const wClasses = computeWClasses(dfwidth);
  const variantClasses = computeVariantClasses(dfvariant);
  const marginClasses = computeMarginClasses(dfmargin);
  const paddingClasses = computePaddingClasses(dfpadding);
  const baseClasses = contentVariants({
    round,
  });

  return React.createElement(
    as,
    {
      className: clsx(
        baseClasses,
        flexClasses,
        hClasses,
        wClasses,
        variantClasses,
        marginClasses,
        paddingClasses,
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
