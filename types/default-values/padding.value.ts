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

export const DF_PADDING_VARIANTS = {
  p: DF_PADDINGP,
  px: DF_PADDINGX,
  py: DF_PADDINGY,
  ps: DF_PADDINGS,
  pe: DF_PADDINGE,
  pt: DF_PADDINGT,
  pr: DF_PADDINGR,
  pb: DF_PADDINGB,
  pl: DF_PADDINGL,
};

export interface TP_PADDING_VARIANTS {
  p?: keyof typeof DF_PADDINGP;
  px?: keyof typeof DF_PADDINGX;
  py?: keyof typeof DF_PADDINGY;
  ps?: keyof typeof DF_PADDINGS;
  pe?: keyof typeof DF_PADDINGE;
  pt?: keyof typeof DF_PADDINGT;
  pr?: keyof typeof DF_PADDINGR;
  pb?: keyof typeof DF_PADDINGB;
  pl?: keyof typeof DF_PADDINGL;
}
