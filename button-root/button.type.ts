// styles/button.ts
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementType } from "react";
import {
  DF_FLEX_ALIGN,
  DF_FLEX_DIRECTION,
  DF_FLEX_JUSTIFY,
  DF_FLEX_OBJECT,
} from "../types/flex.type";
import {
  DF_ALIGN,
  DF_DECORATION,
  DF_FONT_OBJECT,
  DF_OVERFLOW,
  DF_SIZE,
  DF_SPACING,
  DF_TRANSFORM,
  DF_WEIGHT,
  DF_WRAP,
} from "../types/font.type";
import {
  DF_HEIGHT,
  DF_HEIGHT_MAX,
  DF_HEIGHT_MIN,
  DF_HEIGHT_OBJECT,
} from "../types/height.type";
import {
  DF_MARGIN,
  DF_MARGIN_OBJECT,
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
  DF_PADDING_OBJECT,
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
import { RenderIconProps } from "../utils/render-icon.root";

export const buttonVariants = cva(
  "inline-flex items-center justify-center border border-transparent font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2",
  {
    variants: {
      variant: DF_VARIANT,
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "opacity-100 cursor-pointer",
      },
      full: {
        true: "",
        false: "mx-auto",
      },
      round: {
        true: "rounded-full",
        false: "rounded",
      },
      flex: {
        align: DF_FLEX_ALIGN,
        direction: DF_FLEX_DIRECTION,
        justify: DF_FLEX_JUSTIFY,
        wrap: DF_WRAP,
      },
      padding: {
        p: DF_PADDINGP,
        px: DF_PADDINGX,
        py: DF_PADDINGY,
        ps: DF_PADDINGS,
        pe: DF_PADDINGE,
        pt: DF_PADDINGT,
        pr: DF_PADDINGR,
        pb: DF_PADDINGB,
        pl: DF_PADDINGL,
      },
      margin: {
        m: DF_MARGIN,
        mx: DF_MARGINX,
        my: DF_MARGINY,
        ms: DF_MARGINS,
        me: DF_MARGINE,
        mt: DF_MARGINT,
        mr: DF_MARGINR,
        mb: DF_MARGINB,
        ml: DF_MARGINL,
      },
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
      font: {
        size: DF_SIZE,
        weight: DF_WEIGHT,
        spacing: DF_SPACING,
        wrap: DF_WRAP,
        align: DF_ALIGN,
        decoration: DF_DECORATION,
        transform: DF_TRANSFORM,
        overflow: DF_OVERFLOW,
      },
    },
    defaultVariants: {
      round: false,
      variant: "gray",
      full: false,
      disabled: false,
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export type ButtonRootProps<T extends ElementType> =
  ComponentPropsWithoutRef<T> &
    ButtonVariants & {
      as?: keyof JSX.IntrinsicElements;
      className?: string;
      children?: React.ReactNode;
      isLoading?: boolean;
      loadingText?: string;
      iconClass?: string;
      text?: string;
      dfround?: boolean;
      dfheight?: DF_HEIGHT_OBJECT;
      dfwidth?: DF_WIDTH_OBJECT;
      dfflex?: DF_FLEX_OBJECT;
      dfvariant?: DF_VARIANT_OBJECT;
      dffont?: DF_FONT_OBJECT;
      dfpadding?: DF_PADDING_OBJECT;
      dfmargin?: DF_MARGIN_OBJECT;
      dficon?: RenderIconProps;
      iconStart?: RenderIconProps;
      iconEnd?: RenderIconProps;
    };
