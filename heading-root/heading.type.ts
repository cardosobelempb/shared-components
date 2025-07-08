// styles/content.ts
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementType } from "react";
import {
  TALIGN,
  TDECORATION,
  TOVERFLOW,
  TS,
  TSPACING,
  TTRANSFORM,
  TWEIGHT,
  TWRAP,
} from "../types/sf";

export const headingVariants = cva("flex flex-col mx-auto w-full", {
  variants: {
    sf: TS,
    weight: TWEIGHT,
    spacing: TSPACING,
    wrap: TWRAP,
    align: TALIGN,
    decoration: TDECORATION,
    transform: TTRANSFORM,
    overflow: TOVERFLOW,
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
    };
