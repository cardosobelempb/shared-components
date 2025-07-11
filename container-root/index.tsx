import clsx from "clsx";
import type { ElementType } from "react";
import React from "react";
import { ContainerRootProps, containerVariants } from "./container.type";
import { computeFlexClasses } from "../types/flex.type";
import { computeHClasses } from "../types/height.type";
import { computeWClasses } from "../types/width.type";

export default function ContainerRoot<T extends ElementType>({
  as = "section",
  className,
  children,
  dfflex,
  dfwidth,
  dfheight,
  round,
  ...props
}: ContainerRootProps<T>) {
  const baseClasses = containerVariants({
    round,
  });
  const flexClasses = computeFlexClasses(dfflex);
  const hClasses = computeHClasses(dfheight);
  const wClasses = computeWClasses(dfwidth);

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
