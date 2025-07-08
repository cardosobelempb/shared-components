import clsx from "clsx";
import type { ElementType } from "react";
import React from "react";
import { ButtonRootProps, buttonVariants } from "./button.type";

export default function ButtonRoot<T extends ElementType>({
  as = "button",
  className,
  sh,
  sw,
  sf,
  variant,
  full,
  disabled,
  isLoading,
  children,
  iconClass,
  iconEnd,
  iconStart,
  round,
  ...props
}: ButtonRootProps<T>) {
  const buttonClasses = clsx(
    `${sh} ${sw}`,
    buttonVariants({ variant, full, disabled, round, sf, sh, sw }),
    className,
    iconClass
  );

  return (
    <>
      {React.createElement(
        as,
        {
          className: buttonClasses,
          ...props,
        },
        iconStart
          ? React.createElement(iconStart, {
              className: iconClass,
            })
          : null,
        <span className={`${sf}`}>{children}</span>,
        iconEnd
          ? React.createElement(iconEnd, {
              className: iconClass,
            })
          : null
      )}
    </>
  );
}
