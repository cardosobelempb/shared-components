export const DF_VARIANT = {
  green: "bg-green-500 text-white hover:bg-green-400",
  gray: "bg-gray-200 text-gray-800 hover:bg-gray-100",
  pink: "bg-pink-500 text-white hover:bg-pink-400",
} as const;

// export const DF_WIDTH_PROPS = {
//   green: DF_VARIANT,
//   gray: DF_VARIANT,
//   pink: DF_VARIANT,
// };

export type DF_WIDTH_PROPS = keyof typeof DF_VARIANT;
// export type Gray = keyof typeof DF_VARIANT.gray;
// export type Pink = keyof typeof DF_VARIANT.pink;

export type DF_VARIANT_OBJECT = {
  variant?: DF_WIDTH_PROPS;
  // gray?: Gray;
  // pink?: Pink;
};

export function computeVariantClasses(obj?: DF_VARIANT_OBJECT): string {
  if (!obj) return "";
  return [
    obj.variant && DF_VARIANT[obj.variant],
    // obj.gray && DF_VARIANT.gray[obj.gray],
    // obj.pink && DF_VARIANT.pink[obj.pink],
  ]
    .filter(Boolean)
    .join(" ");
}
