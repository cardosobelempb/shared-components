import React from "react";
import { IconType } from "react-icons";

export type RenderIconProps = {
  icon: IconType | undefined;
  iconClass?: string;
  position?: "start" | "end" | "center";
};
export function renderIconRoot({
  icon,
  iconClass,
}: RenderIconProps): JSX.Element | null {
  if (icon) {
    return React.createElement(icon, { className: iconClass });
  }
  return null;
}
