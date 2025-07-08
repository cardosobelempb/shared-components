// styles/box.ts
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementType } from "react";
import { DF_FLEX, DF_FLEX_OBJECT } from "../types/flex";
import {
  DF_HEIGHT,
  DF_HEIGHT_MAX,
  DF_HEIGHT_MIN,
  DF_HEIGHT_OBJECT,
} from "../types/sh";
import {
  DF_WIDTH,
  DF_WIDTH_MAX,
  DF_WIDTH_MIN,
  DF_WIDTH_OBJECT,
} from "../types/sw";

export const boxVariants = cva("rounded", {
  variants: {
    round: {
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
    round: false,
  },
});

type BoxVariants = VariantProps<typeof boxVariants>;

export type BoxRootProps<T extends ElementType> = ComponentPropsWithoutRef<T> &
  BoxVariants & {
    as?: keyof JSX.IntrinsicElements;
    className?: string;
    children?: React.ReactNode;
    round?: boolean;
    dfheight?: DF_HEIGHT_OBJECT;
    dfwidth?: DF_WIDTH_OBJECT;
    dfflex?: DF_FLEX_OBJECT;
  };
