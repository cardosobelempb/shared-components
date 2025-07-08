// styles/content.ts
import { cva, type VariantProps } from "class-variance-authority";
import { TFLEX } from "../types/flex";
import { TSW, TSWMAX, TSWMIN } from "../types/sw";
import { TSH, TSHMAX, TSHMIN } from "../types/sh";
import { ComponentPropsWithoutRef, ElementType } from "react";

export const contentVariants = cva("flex flex-col mx-auto w-full", {
  variants: {
    round: {
      true: "rounded-full",
      false: "rounded",
    },
    flex: TFLEX,
    sw: TSW,
    sw_min: TSWMIN,
    sw_max: TSWMAX,
    sh: TSH,
    sh_min: TSHMIN,
    sh_max: TSHMAX,
  },
  defaultVariants: {
    round: false,
    sh: "24",
    sw: "full",
  },
});

type ContentVariants = VariantProps<typeof contentVariants>;

export type ContentRootProps<T extends ElementType> =
  ComponentPropsWithoutRef<T> &
    ContentVariants & {
      as?: keyof JSX.IntrinsicElements;
      className?: string;
      children?: React.ReactNode;
    };
