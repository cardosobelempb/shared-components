// styles/box.ts
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementType } from "react";
import {
  DF_FLEX_ALIGN,
  DF_FLEX_DIRECTION,
  DF_FLEX_JUSTIFY,
  DF_FLEX_OBJECT,
} from "../types/flex.type";
import { DF_WRAP } from "../types/font.type";
import {
  DF_HEIGHT,
  DF_HEIGHT_MAX,
  DF_HEIGHT_MIN,
  DF_HEIGHT_OBJECT,
} from "../types/height.type";
import {
  DF_MARGIN,
  DF_MARGINB,
  DF_MARGINE,
  DF_MARGINL,
  DF_MARGINR,
  DF_MARGINS,
  DF_MARGINT,
  DF_MARGINX,
  DF_MARGINY,
} from "../types/margin.type";
import {
  DF_PADDINGB,
  DF_PADDINGE,
  DF_PADDINGL,
  DF_PADDINGP,
  DF_PADDINGR,
  DF_PADDINGS,
  DF_PADDINGT,
  DF_PADDINGX,
  DF_PADDINGY,
} from "../types/padding.type";
import { DF_VARIANT, DF_VARIANT_OBJECT } from "../types/variant.type";
import {
  DF_WIDTH,
  DF_WIDTH_MAX,
  DF_WIDTH_MIN,
  DF_WIDTH_OBJECT,
} from "../types/width.type";
import {
  DEFAULT_VARIANTS,
  TYPE_DEFAULT_VARIANTS,
} from "../types/default-values/layout.value";

const defaultVariants: TYPE_DEFAULT_VARIANTS = {};

export const boxVariants = cva("rounded", {
  variants: DEFAULT_VARIANTS,
  defaultVariants,
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
    dfvariant?: DF_VARIANT_OBJECT;
  };
