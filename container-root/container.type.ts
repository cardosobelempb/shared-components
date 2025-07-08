// styles/container.ts
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementType } from "react";
import { DF_FLEX_OBJECT, DF_FLEX } from "../types/flex";
import {
  DF_HEIGHT,
  DF_HEIGHT_MIN,
  DF_HEIGHT_MAX,
  DF_HEIGHT_OBJECT,
} from "../types/sh";
import {
  DF_WIDTH,
  DF_WIDTH_MAX,
  DF_WIDTH_MIN,
  DF_WIDTH_OBJECT,
} from "../types/sw";

export const containerVariants = cva("flex flec-col h-full", {
  variants: {
    dfround: {
      true: "rounded-full",
      false: "rounded",
    },
    flex: DF_FLEX,
    width: {
      width: DF_WIDTH,
      min: DF_WIDTH_MIN,
      max: DF_WIDTH_MAX,
    },
    height: {
      height: DF_HEIGHT,
      min: DF_HEIGHT_MIN,
      max: DF_HEIGHT_MAX,
    },
  },
  defaultVariants: {
    dfround: false,
  },
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
    };
