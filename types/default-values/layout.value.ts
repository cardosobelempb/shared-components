import { TP_MARGIN_VARIANTS, TP_PADDING_VARIANTS } from ".";
import {
  DF_FLEX_ALIGN,
  DF_FLEX_DIRECTION,
  DF_FLEX_JUSTIFY,
  DF_FLEX_WRAP,
} from "../flex.type";
import { DF_WRAP } from "../font.type";
import { DF_HEIGHT, DF_HEIGHT_MAX, DF_HEIGHT_MIN } from "../height.type";
import {
  DF_MARGIN,
  DF_MARGINX,
  DF_MARGINY,
  DF_MARGINS,
  DF_MARGINE,
  DF_MARGINT,
  DF_MARGINR,
  DF_MARGINB,
  DF_MARGINL,
} from "../margin.type";
import {
  DF_PADDINGP,
  DF_PADDINGX,
  DF_PADDINGY,
  DF_PADDINGS,
  DF_PADDINGE,
  DF_PADDINGT,
  DF_PADDINGR,
  DF_PADDINGB,
  DF_PADDINGL,
} from "../padding.type";
import { DF_VARIANT } from "../variant.type";
import { DF_WIDTH, DF_WIDTH_MAX, DF_WIDTH_MIN } from "../width.type";

export const DF_LAYOUT_VARIANTS = {
  round: {
    true: "rounded-full",
    false: "rounded",
  },
  variant: DF_VARIANT,
  align: DF_FLEX_ALIGN,
  direction: DF_FLEX_DIRECTION,
  justify: DF_FLEX_JUSTIFY,
  wrap: DF_WRAP,
  width: DF_WIDTH,
  wmin: DF_WIDTH_MIN,
  wmax: DF_WIDTH_MAX,
  height: DF_HEIGHT,
  hmin: DF_HEIGHT_MIN,
  hmax: DF_HEIGHT_MAX,
  p: DF_PADDINGP,
  px: DF_PADDINGX,
  py: DF_PADDINGY,
  ps: DF_PADDINGS,
  pe: DF_PADDINGE,
  pt: DF_PADDINGT,
  pr: DF_PADDINGR,
  pb: DF_PADDINGB,
  pl: DF_PADDINGL,
  m: DF_MARGIN,
  mx: DF_MARGINX,
  my: DF_MARGINY,
  ms: DF_MARGINS,
  me: DF_MARGINE,
  mt: DF_MARGINT,
  mr: DF_MARGINR,
  mb: DF_MARGINB,
  ml: DF_MARGINL,
};

// Tipagem específica para os variants agrupados
export interface TP_LAYOUT_VARIANTS
  extends TP_MARGIN_VARIANTS,
    TP_PADDING_VARIANTS {
  round?: boolean;
  variant?: keyof typeof DF_VARIANT;
  direction?: keyof typeof DF_FLEX_DIRECTION;
  justify?: keyof typeof DF_FLEX_JUSTIFY;
  align?: keyof typeof DF_FLEX_ALIGN;
  wrap?: keyof typeof DF_FLEX_WRAP;
  width?: keyof typeof DF_WIDTH;
  wmin?: keyof typeof DF_WIDTH_MIN;
  wmax?: keyof typeof DF_WIDTH_MAX;
  height?: keyof typeof DF_HEIGHT;
  hmin?: keyof typeof DF_HEIGHT_MIN;
  hmax?: keyof typeof DF_HEIGHT_MAX;
}
