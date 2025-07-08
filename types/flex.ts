export const TFLEX = {
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
};

export type FlexDirection = keyof typeof TFLEX.direction;
export type FlexJustify = keyof typeof TFLEX.justify;
export type FlexAlign = keyof typeof TFLEX.align;
export type FlexWrap = keyof typeof TFLEX.wrap;

export type FlexObject = {
  direction?: FlexDirection;
  justify?: FlexJustify;
  align?: FlexAlign;
  wrap?: FlexWrap;
};

export function computeFlexClasses(flex?: FlexObject) {
  if (!flex) return null;
  return [
    "flex",
    flex.direction && TFLEX.direction[flex.direction],
    flex.justify && TFLEX.justify[flex.justify],
    flex.align && TFLEX.align[flex.align],
    flex.wrap && TFLEX.wrap[flex.wrap],
  ]
    .filter(Boolean)
    .join(" ");
}
