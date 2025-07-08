// components/input.type.ts
import { cva, type VariantProps } from "class-variance-authority";

export const inputVariants = cva(
  "block w-full rounded-md bg-gray-500 border border-gray-500 bg-white text-sm text-gray-800 shadow-sm placeholder-gray-500 focus:ring-2 focus:ring-blue-500 focus:outline-none",
  {
    variants: {
      scale: {
        sm: "px-2 py-1 text-sm",
        md: "px-3 py-2 text-base",
        lg: "px-4 py-3 text-lg",
      },
      variant: {
        default:
          "bg-gray-500 border-gray-500 text-gray-800 placeholder-gray-500",
        error: "bg-pink-500 border-pink-500 text-pink-600 placeholder-pink-400",
        success:
          "bg-green-500 border-green-500 text-green-800 placeholder-green-500",
      },
      full: {
        true: "w-full",
        false: "",
      },
      disabled: {
        true: "bg-gray-100 text-gray-500",
        false: "",
      },
    },
    defaultVariants: {
      scale: "md",
      variant: "default",
      full: true,
      disabled: false,
    },
  }
);

export type InputVariants = VariantProps<typeof inputVariants>;
