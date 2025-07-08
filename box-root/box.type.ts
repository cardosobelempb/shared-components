// styles/box.ts
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementType } from "react";
import { FlexObject, TFLEX } from "../types/flex";
import { tsh, TSH } from "../types/sh";
import { tsw, TSW } from "../types/sw";

export const boxVariants = cva("rounded", {
  variants: {
    round: {
      true: "rounded-full",
      false: "rounded",
    },
    sw: TSW,
    sh: TSH,
  },
  defaultVariants: {
    round: false,
    sh: "24",
    sw: "full",
  },
});

type BoxVariants = VariantProps<typeof boxVariants>;

export type BoxRootProps<T extends ElementType> = ComponentPropsWithoutRef<T> &
  BoxVariants & {
    as?: keyof JSX.IntrinsicElements;
    className?: string;
    children?: React.ReactNode;
    round?: boolean;
    sh?: tsh;
    sw?: tsw;
    flex?: FlexObject;
  };
