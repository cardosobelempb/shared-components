import clsx from "clsx";
import type { ElementType } from "react";
import React from "react";
import { ContentRootProps, contentVariants } from "./content.type";

export default function ContentRoot<T extends ElementType>({
  as = "div",
  className,
  children,
  flex,
  sh,
  round,
  sh_max,
  sh_min,
  sw,
  sw_max,
  sw_min,
  ...props
}: ContentRootProps<T>) {
  const classes = contentVariants({
    flex,
    sh,
    round,
    sh_max,
    sh_min,
    sw,
    sw_max,
    sw_min,
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
