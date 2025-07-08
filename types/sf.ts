export const TS = {
  "8": "text-[8px]",
  "10": "text-[10px]",
  "12": "text-xs",
  "14": "text-sm",
  "16": "text-base",
  "18": "text-lg",
  "20": "text-xl",
  "24": "text-2xl",
  "30": "text-3xl",
  "36": "text-4xl",
  "48": "text-5xl",
  "60": "text-6xl",
  "72": "text-7xl",
  "96": "text-8xl",
  "128": "text-9xl",
};

export const TWEIGHT = {
  thin: "font-thin",
  extralight: "font-extralight",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black",
};
export const TSPACING = {
  tighter: "tracking-tighter",
  tight: "tracking-tight",
  normal: "tracking-normal",
  wide: "tracking-wide",
  wider: "tracking-wider",
  widest: "tracking-widest",
};

export const TWRAP = {
  wrap: "text-wrap",
  nowrap: "text-nowrap",
  balance: "text-balance",
  pretty: "text-pretty",
};
export const TALIGN = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
  start: "text-start",
  end: "text-end",
};
export const TDECORATION = {
  underline: "underline",
  overline: "overline",
  through: "line-through",
  none: "no-underline",
  inherit: "inherit",
  current: "decoration-current",
  transparent: "decoration-transparent",
  solid: "decoration-solid",
  double: "decoration-double",
  dotted: "decoration-dotted",
  dashed: "decoration-dashed",
  wavy: "decoration-wavy",
};
export const TTRANSFORM = {
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize",
  case: "normal-case",
};
export const TOVERFLOW = {
  truncate: "truncate",
  ellipsis: "text-ellipsis",
  clip: "text-clip",
};
export type ts = Partial<keyof typeof TS>;
export type tweight = Partial<keyof typeof TWEIGHT>;
export type tspacing = Partial<keyof typeof TSPACING>;
export type twrap = Partial<keyof typeof TWRAP>;
export type tdecoration = Partial<keyof typeof TDECORATION>;
export type ttransform = Partial<keyof typeof TTRANSFORM>;
export type toverflow = Partial<keyof typeof TOVERFLOW>;
