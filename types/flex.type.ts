export const DF_FLEX_DIRECTION = {
  row: "flex-row",
  col: "flex-col",
} as const;

export const DF_FLEX_JUSTIFY = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
} as const;

export const DF_FLEX_ALIGN = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch",
} as const;

export const DF_FLEX_WRAP = {
  wrap: "flex-wrap",
  nowrap: "flex-nowrap",
} as const;

export const DF_FLEX_PROPS = {
  direction: DF_FLEX_DIRECTION,
  justify: DF_FLEX_JUSTIFY,
  align: DF_FLEX_ALIGN,
  wrap: DF_FLEX_WRAP,
} as const;

export type DF_FLEX_ALING = keyof typeof DF_FLEX_PROPS.align;
export type DF_FLEX_DIRECTION = keyof typeof DF_FLEX_PROPS.direction;
export type DF_FLEX_JUSTIFY = keyof typeof DF_FLEX_PROPS.justify;
export type DF_FLEX_WRAP = keyof typeof DF_FLEX_PROPS.wrap;

export type DF_FLEX_OBJECT = {
  align?: DF_FLEX_ALING;
  direction?: DF_FLEX_DIRECTION;
  justify?: DF_FLEX_JUSTIFY;
  wrap?: DF_FLEX_WRAP;
};

export function computeFlexClasses(obj?: DF_FLEX_OBJECT): string {
  if (!obj) return "";
  return [
    obj.align && DF_FLEX_PROPS.align[obj.align],
    obj.direction && DF_FLEX_PROPS.direction[obj.direction],
    obj.justify && DF_FLEX_PROPS.justify[obj.justify],
    obj.wrap && DF_FLEX_PROPS.wrap[obj.wrap],
  ]
    .filter(Boolean)
    .join(" ");
}
