import { IconType } from "react-icons";

export const DF_ICON = {
  icon: "icon",
  position: "position",
  iconClass: "iconClass",
} as const;

export const DF_ICON_PROPS = {
  start: DF_ICON,
  center: DF_ICON,
  end: DF_ICON,
} as const;

export type DF_ICON_START = keyof typeof DF_ICON_PROPS.start;
export type DF_ICON_CENTER = keyof typeof DF_ICON_PROPS.center;
export type DF_ICON_END = keyof typeof DF_ICON_PROPS.end;

export type DF_ICON_OBJECT = {
  start: DF_ICON_START;
  center: DF_ICON_CENTER;
  end: DF_ICON_END;
};

export function computeIconClasses(obj?: DF_ICON_OBJECT) {
  if (!obj) return null;
  return [
    "obj",
    obj.start && DF_ICON_PROPS.start[obj.start],
    obj.center && DF_ICON_PROPS.center[obj.center],
    obj.end && DF_ICON_PROPS.end[obj.end],
  ]
    .filter(Boolean)
    .join(" ");
}
