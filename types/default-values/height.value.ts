import { DF_HEIGHT, DF_HEIGHT_MAX, DF_HEIGHT_MIN } from "../height.type";

export const DF_WIDTH_VARIANTS = {
  height: DF_HEIGHT,
  min: DF_HEIGHT_MIN,
  max: DF_HEIGHT_MAX,
};

// Tipagem específica para os variants agrupados
export interface TP_WIDTH_VARIANTS {
  height?: keyof typeof DF_HEIGHT;
  min?: keyof typeof DF_HEIGHT_MIN;
  max?: keyof typeof DF_HEIGHT_MAX;
}
