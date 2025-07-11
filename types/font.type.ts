export const DF_SIZE = {
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

export const DF_WEIGHT = {
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
export const DF_SPACING = {
  tighter: "tracking-tighter",
  tight: "tracking-tight",
  normal: "tracking-normal",
  wide: "tracking-wide",
  wider: "tracking-wider",
  widest: "tracking-widest",
};

export const DF_WRAP = {
  wrap: "text-wrap",
  nowrap: "text-nowrap",
  balance: "text-balance",
  pretty: "text-pretty",
};
export const DF_ALIGN = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
  start: "text-start",
  end: "text-end",
};
export const DF_DECORATION = {
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
export const DF_TRANSFORM = {
  uppercase: "uppercase",
  lowercase: "lowercase",
  capitalize: "capitalize",
  case: "normal-case",
};
export const DF_OVERFLOW = {
  truncate: "truncate",
  ellipsis: "text-ellipsis",
  clip: "text-clip",
};

export const DF_PROPS = {
  align: DF_ALIGN,
  decoration: DF_DECORATION,
  overflow: DF_OVERFLOW,
  size: DF_SIZE,
  spacing: DF_SPACING,
  transform: DF_TRANSFORM,
  weight: DF_WEIGHT,
  wrap: DF_WRAP,
} as const;

export type ALIGN = keyof typeof DF_PROPS.align;
export type DECORATION = keyof typeof DF_PROPS.decoration;
export type OVERFLOW = keyof typeof DF_PROPS.overflow;
export type SIZE = keyof typeof DF_PROPS.size;
export type SPACING = keyof typeof DF_PROPS.spacing;
export type TRANSFORM = keyof typeof DF_PROPS.transform;
export type WEIGHT = keyof typeof DF_PROPS.weight;
export type WRAP = keyof typeof DF_PROPS.wrap;

export type DF_FONT_OBJECT = {
  align?: ALIGN;
  decoration?: DECORATION;
  overflow?: OVERFLOW;
  size?: SIZE;
  spacing?: SPACING;
  transform?: TRANSFORM;
  weight?: WEIGHT;
  wrap?: WRAP;
};

export function computeFontClasses(obj?: DF_FONT_OBJECT): string {
  if (!obj) return "";
  return [
    obj.align && DF_PROPS.align[obj.align],
    obj.decoration && DF_PROPS.decoration[obj.decoration],
    obj.overflow && DF_PROPS.overflow[obj.overflow],
    obj.size && DF_PROPS.size[obj.size],
    obj.spacing && DF_PROPS.spacing[obj.spacing],
    obj.transform && DF_PROPS.transform[obj.transform],
    obj.weight && DF_PROPS.weight[obj.weight],
    obj.wrap && DF_PROPS.wrap[obj.wrap],
  ]
    .filter(Boolean)
    .join(" ");
}
