// styles/content.ts
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementType } from "react";
import {
  DF_ALIGN,
  DF_DECORATION,
  DF_OVERFLOW,
  DF_SIZE,
  DF_SPACING,
  DF_TRANSFORM,
  DF_WEIGHT,
  DF_WRAP,
  DF_FONT_OBJECT,
} from "../types/font";

export const headingVariants = cva("flex flex-col mx-auto w-full", {
  variants: {
    size: DF_SIZE,
    weight: DF_WEIGHT,
    spacing: DF_SPACING,
    wrap: DF_WRAP,
    align: DF_ALIGN,
    decoration: DF_DECORATION,
    transform: DF_TRANSFORM,
    overflow: DF_OVERFLOW,
  },
  defaultVariants: {},
});

type HeadingVariants = VariantProps<typeof headingVariants>;

export type HeadingRootProps<T extends ElementType> =
  ComponentPropsWithoutRef<T> &
    HeadingVariants & {
      as?: keyof JSX.IntrinsicElements;
      className?: string;
      children?: React.ReactNode;
      dffont?: DF_FONT_OBJECT;
    };
