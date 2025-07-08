// components/icon.type.ts
import { cva, type VariantProps } from "class-variance-authority";

export const iconVariants = cva("flex justify-center items-center rounded", {
  variants: {
    size: {
      sm: "w-4 h-4",
      md: "w-5 h-5",
      lg: "w-6 h-6",
      xl: "w-8 h-8",
    },
    center: {
      true: "mx-auto",
      false: "",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: "opacity-100 cursor-pointer",
    },
    variant: {
      primary: "bg-green-500 text-white hover:bg-green-800",
      secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
      danger: "bg-pink-500 text-white hover:bg-pink-800",
    },
  },
  defaultVariants: {
    size: "md",
    variant: "primary",
    center: false,
    disabled: false,
  },
});

export type IconVariants = VariantProps<typeof iconVariants>;
