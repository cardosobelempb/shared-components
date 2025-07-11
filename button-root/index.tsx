import clsx from "clsx";
import React, { ElementType } from "react";
import { computeFlexClasses } from "../types/flex.type";
import { computeFontClasses } from "../types/font.type";
import { computeHClasses } from "../types/height.type";
import { computeMarginClasses } from "../types/margin.type";
import { computePaddingClasses } from "../types/padding.type";
import { computeVariantClasses } from "../types/variant.type";
import { computeWClasses } from "../types/width.type";
import { renderIconRoot } from "../utils/render-icon.root";
import { ButtonRootProps, buttonVariants } from "./button.type";

export default function ButtonRoot<T extends ElementType>({
  as = "button",
  className,
  dfflex,
  dfheight,
  dfvariant,
  dfwidth,
  dffont,
  dfround,
  dfmargin,
  dfpadding,
  dficon,
  disabled,
  isLoading,
  children,
  iconClass,
  iconPosition,
  round,
  iconEnd,
  iconStart,
  ...props
}: ButtonRootProps<T>) {
  const baseClasses = buttonVariants({ round });
  const flexClasses = computeFlexClasses(dfflex);
  const hClasses = computeHClasses(dfheight);
  const wClasses = computeWClasses(dfwidth);
  const variantClasses = computeVariantClasses(dfvariant);
  const fontClasses = computeFontClasses(dffont);
  const marginClasses = computeMarginClasses(dfmargin);
  const paddingClasses = computePaddingClasses(dfpadding);
  const IconStart = iconStart ? renderIconRoot(iconStart) : null;
  const IconEnd = iconEnd ? renderIconRoot(iconEnd) : null;

  return React.createElement(
    as,
    {
      className: clsx(
        "px-2 py-1",
        baseClasses,
        flexClasses,
        hClasses,
        wClasses,
        variantClasses,
        fontClasses,
        marginClasses,
        paddingClasses,
        iconPosition,
        className
      ),
      disabled,
      ...props,
    },
    // Renderiza o ícone com a posição correta

    // Renderiza o texto do botão
    <span className={`${fontClasses} flex items-center justify-center gap-x-3`}>
      {IconStart}
      {children}
      {IconEnd}
    </span>
  );
}
