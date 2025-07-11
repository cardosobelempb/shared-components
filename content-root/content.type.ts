// styles/content.ts
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementType } from "react";
import {
  DF_LAYOUT_VARIANTS,
  TP_LAYOUT_VARIANTS,
} from "../types/default-values/layout.value";
import { DF_FLEX_OBJECT } from "../types/flex.type";
import { DF_HEIGHT_OBJECT } from "../types/height.type";
import { DF_MARGIN_OBJECT } from "../types/margin.type";
import { DF_PADDING_OBJECT } from "../types/padding.type";
import { DF_VARIANT_OBJECT } from "../types/variant.type";
import { DF_WIDTH_OBJECT } from "../types/width.type";

// Define os valores padrão com tipagem segura
const defaultVariants: TP_LAYOUT_VARIANTS = {
  wmax: "1152",
};

type ContentVariants = VariantProps<typeof contentVariants>;

export const contentVariants = cva("flex flex-col mx-auto w-full", {
  variants: DF_LAYOUT_VARIANTS,
  defaultVariants,
});

// type DefaultContentVariants = Partial<VariantProps<typeof contentVariants>>;

export type ContentRootProps<T extends ElementType> =
  ComponentPropsWithoutRef<T> &
    ContentVariants & {
      as?: keyof JSX.IntrinsicElements;
      className?: string;
      children?: React.ReactNode;
      dfheight?: DF_HEIGHT_OBJECT;
      dfwidth?: DF_WIDTH_OBJECT;
      dfflex?: DF_FLEX_OBJECT;
      dfvariant?: DF_VARIANT_OBJECT;
      dfpadding?: DF_PADDING_OBJECT;
      dfmargin?: DF_MARGIN_OBJECT;
    };
