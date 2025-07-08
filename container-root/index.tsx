import clsx from "clsx";
import type { ElementType } from "react";
import React from "react";
import { ContainerRootProps, containerVariants } from "./container.type";

export default function ContainerRoot<T extends ElementType>({
  as = "section",
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
}: ContainerRootProps<T>) {
  const classes = containerVariants({
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
