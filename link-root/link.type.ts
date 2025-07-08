// styles/link.ts
import { cva, type VariantProps } from "class-variance-authority";

export const linkVariants = cva(
  "inline-flex items-center justify-center px-4 py-2 border border-transparent font-semibold rounded-md",
  {
    variants: {
      size: {
        sm: "text-sm py-2 px-3",
        md: "text-base py-3 px-4",
        lg: "text-lg py-4 px-5",
      },
      variant: {
        primary: "bg-green-500 text-white hover:bg-green-800",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        danger: "bg-pink-500 text-white hover:bg-pink-800",
      },
      underline: {
        true: "underline",
        false: "no-underline",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "opacity-100 cursor-pointer",
      },
      full: {
        true: "",
        false: "mx-auto",
      },
    },
    defaultVariants: {
      size: "md",
      underline: false,
      full: false,
      disabled: false,
    },
  }
);

export type LinkVariants = VariantProps<typeof linkVariants>;
