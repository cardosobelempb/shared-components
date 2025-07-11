import { DF_WIDTH, DF_WIDTH_MIN, DF_WIDTH_MAX } from "../width.type";

export const DF_WIDTH_VARIANTS = {
  width: DF_WIDTH,
  min: DF_WIDTH_MIN,
  max: DF_WIDTH_MAX,
};

// Tipagem específica para os variants agrupados
export interface TP_WIDTH_VARIANTS {
  width?: keyof typeof DF_WIDTH;
  min?: keyof typeof DF_WIDTH_MIN;
  max?: keyof typeof DF_WIDTH_MAX;
}
