import {
  DF_SIZE,
  DF_WEIGHT,
  DF_SPACING,
  DF_WRAP,
  DF_ALIGN,
  DF_DECORATION,
  DF_TRANSFORM,
  DF_OVERFLOW,
} from "../font.type";

export const DF_FONT_VARIANTS = {
  size: DF_SIZE,
  weight: DF_WEIGHT,
  spacing: DF_SPACING,
  wrap: DF_WRAP,
  align: DF_ALIGN,
  decoration: DF_DECORATION,
  transform: DF_TRANSFORM,
  overflow: DF_OVERFLOW,
};

// Tipagem específica para os variants agrupados
export interface TP_FONT_VARIANTS {
  size?: keyof typeof DF_SIZE;
  weight?: keyof typeof DF_WEIGHT;
  spacing?: keyof typeof DF_SPACING;
  wrap?: keyof typeof DF_WRAP;
  align?: keyof typeof DF_ALIGN;
  decoration?: keyof typeof DF_DECORATION;
  transform?: keyof typeof DF_TRANSFORM;
  overflow?: keyof typeof DF_OVERFLOW;
}
