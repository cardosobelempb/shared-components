// styles/button.ts
import { cva, type VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, ElementType } from "react";
import { IconType } from "react-icons";
import { tsh, TSH } from "../types/sh";
import { tsw, TSW } from "../types/sw";
import { ts, TS } from "../types/sf";

export const buttonVariants = cva(
  "inline-flex items-center justify-center px-4 py-2 border border-transparent font-semibold focus:outline-none focus:ring-2 focus:ring-offset-2 gap-x-3",
  {
    variants: {
      variant: {
        primary: "bg-green-500 text-white hover:bg-green-400",
        secondary: "bg-gray-200 text-gray-800 hover:bg-gray-100",
        danger: "bg-pink-500 text-white hover:bg-pink-400",
      },
      disabled: {
        true: "opacity-50 cursor-not-allowed",
        false: "opacity-100 cursor-pointer",
      },
      full: {
        true: "",
        false: "mx-auto",
      },
      round: {
        true: "rounded-full",
        false: "rounded",
      },
      sw: TSW,
      sh: TSH,
      sf: TS,
    },
    defaultVariants: {
      round: false,
      sf: "16",
      sh: "24",
      sw: "full",
      variant: "primary",
      full: false,
      disabled: false,
    },
  }
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;

export type ButtonRootProps<T extends ElementType> =
  ComponentPropsWithoutRef<T> &
    ButtonVariants & {
      as?: keyof JSX.IntrinsicElements;
      className?: string;
      children?: React.ReactNode;
      isLoading?: boolean;
      loadingText?: string;
      iconClass?: string;
      iconStart?: IconType;
      iconEnd?: IconType;
      text?: string;
      round?: boolean;
      sf?: ts;
      sh?: tsh;
      sw?: tsw;
    };
