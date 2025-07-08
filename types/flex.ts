export const DF_FLEX = {
  direction: {
    row: "flex-row",
    col: "flex-col",
  },
  justify: {
    start: "justify-start",
    center: "justify-center",
    end: "justify-end",
    between: "justify-between",
  },
  align: {
    start: "items-start",
    center: "items-center",
    end: "items-end",
    stretch: "items-stretch",
  },
  wrap: {
    wrap: "flex-wrap",
    nowrap: "flex-nowrap",
  },
} as const;

export type Direction = keyof typeof DF_FLEX.direction;
export type Justify = keyof typeof DF_FLEX.justify;
export type Align = keyof typeof DF_FLEX.align;
export type Wrap = keyof typeof DF_FLEX.wrap;

export type DF_FLEX_OBJECT = {
  direction?: Direction;
  justify?: Justify;
  align?: Align;
  wrap?: Wrap;
};

export function computeFlexClasses(obj?: DF_FLEX_OBJECT): string {
  if (!obj) return "";
  return [
    obj.direction && DF_FLEX.direction[obj.direction],
    obj.justify && DF_FLEX.justify[obj.justify],
    obj.align && DF_FLEX.align[obj.align],
    obj.wrap && DF_FLEX.wrap[obj.wrap],
  ]
    .filter(Boolean)
    .join(" ");
}
