// styles/content.ts
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementType } from "react";

import { DF_FONT_OBJECT } from "../types/font.type";
import { DF_FONT_VARIANTS, TP_FONT_VARIANTS } from "../types/default-values";

const defaultVariants: TP_FONT_VARIANTS = {
  size: "16",
};

export const headingVariants = cva("flex flex-col mx-auto w-full", {
  variants: DF_FONT_VARIANTS,
  defaultVariants,
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
