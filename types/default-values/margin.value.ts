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

// Tipagem específica para os variants agrupados
export const DF_MARGIN_VARIANTS = {
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

export interface TP_MARGIN_VARIANTS {
  m?: keyof typeof DF_MARGIN;
  mx?: keyof typeof DF_MARGINX;
  my?: keyof typeof DF_MARGINY;
  ms?: keyof typeof DF_MARGINS;
  me?: keyof typeof DF_MARGINE;
  mt?: keyof typeof DF_MARGINT;
  mr?: keyof typeof DF_MARGINR;
  mb?: keyof typeof DF_MARGINB;
  ml?: keyof typeof DF_MARGINL;
}
