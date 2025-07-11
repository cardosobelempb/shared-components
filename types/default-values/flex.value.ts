import {
  DF_FLEX_ALIGN,
  DF_FLEX_DIRECTION,
  DF_FLEX_JUSTIFY,
  DF_FLEX_WRAP,
} from "../flex.type";

export const DF_FLEX_VARIANTS = {
  align: DF_FLEX_ALIGN,
  direction: DF_FLEX_DIRECTION,
  justify: DF_FLEX_JUSTIFY,
  wrap: DF_FLEX_WRAP,
};

// Tipagem específica para os variants agrupados
export interface TP_FLEX_VARIANTS {
  align?: keyof typeof DF_FLEX_ALIGN;
  direction?: keyof typeof DF_FLEX_DIRECTION;
  justify?: keyof typeof DF_FLEX_JUSTIFY;
  wrap?: keyof typeof DF_FLEX_WRAP;
}
