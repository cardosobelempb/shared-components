// components/LinkRoot.tsx
"use client";

import React from "react";
import NextLink from "next/link";
import clsx from "clsx";
import type { ComponentPropsWithoutRef, ElementType, MouseEvent } from "react";
import { linkVariants, type LinkVariants } from "./link.type";
import type { IconType } from "react-icons";

type LinkElement = "a" | "button";

type LinkRootProps<T extends ElementType = LinkElement> =
  ComponentPropsWithoutRef<T> &
    LinkVariants & {
      as?: T;
      href?: string;
      disabled?: boolean;
      className?: string;
      children?: React.ReactNode;
      icon?: IconType;
      iconPosition?: "start" | "end";
      spin?: boolean;
    };

export default function LinkRoot<T extends ElementType = "a">({
  as,
  href,
  className,
  children,
  size,
  underline,
  full,
  variant,
  disabled,
  icon: Icon,
  iconPosition = "start",
  onClick,
  spin,
  ...props
}: LinkRootProps<T>) {
  const Tag = as || "button";
  const isInternal = href?.startsWith("/") || href?.startsWith("#");
  const isExternal = href?.startsWith("http");

  const classes = clsx(
    linkVariants({ size, underline, full, disabled, variant }),
    className
  );

  const handleClick = (e: MouseEvent<HTMLElement>) => {
    if (disabled) {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    onClick?.(e);
  };

  const content = (
    <>
      {Icon && iconPosition === "start" && (
        <Icon
          className={`${spin && "animate-spin"} mr-2 h-4 w-4 shrink-0`}
          aria-hidden="true"
        />
      )}
      {children}
      {Icon && iconPosition === "end" && (
        <Icon
          className={`${spin && "animate-spin"} ml-2 h-4 w-4 shrink-0`}
          aria-hidden="true"
        />
      )}
    </>
  );

  switch (true) {
    // Next.js internal link
    case !!href && isInternal:
      return (
        <NextLink
          href={href!}
          passHref
          className={classes}
          onClick={handleClick}
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : undefined}
          {...props}
        >
          {content}
        </NextLink>
      );

    // External link
    case !!href && isExternal:
      return (
        <a
          href={disabled ? undefined : href}
          className={classes}
          onClick={handleClick}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={disabled}
          tabIndex={disabled ? -1 : undefined}
          {...props}
        >
          {content}
        </a>
      );

    // Button or fallback
    default:
      return React.createElement(
        Tag,
        {
          className: classes,
          type: Tag === "button" ? "button" : undefined,
          disabled,
          onClick: handleClick,
          ...props,
        },
        content
      );
  }
}
