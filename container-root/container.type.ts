// styles/container.ts
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementType } from "react";
import {
  TP_LAYOUT_VARIANTS,
  DF_LAYOUT_VARIANTS,
} from "../types/default-values/layout.value";
import { DF_FLEX_OBJECT } from "../types/flex.type";
import { DF_HEIGHT_OBJECT } from "../types/height.type";
import { DF_VARIANT_OBJECT } from "../types/variant.type";
import { DF_WIDTH_OBJECT } from "../types/width.type";

const defaultVariants: TP_LAYOUT_VARIANTS = {};

export const containerVariants = cva("flex flec-col h-full", {
  variants: DF_LAYOUT_VARIANTS,
  defaultVariants,
});

type ContainerVariants = VariantProps<typeof containerVariants>;

export type ContainerRootProps<T extends ElementType> =
  ComponentPropsWithoutRef<T> &
    ContainerVariants & {
      as?: keyof JSX.IntrinsicElements;
      className?: string;
      children?: React.ReactNode;
      dfheight?: DF_HEIGHT_OBJECT;
      dfwidth?: DF_WIDTH_OBJECT;
      dfflex?: DF_FLEX_OBJECT;
      dfvariant?: DF_VARIANT_OBJECT;
    };
