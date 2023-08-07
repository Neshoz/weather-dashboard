import { CSSProperties } from "react";
import { TypographyProps } from "./types";

const fontSizeGetter = (size?: Sizes | number) => {
  if (size) {
    return typeof size === "string" ? fontSizeBySize[size] : size;
  }

  return undefined;
};

type Sizes = Required<TypographyProps>["size"];

const fontSizeBySize: Record<Sizes, number> = {
  lg: 24,
  md: 20,
  sm: 16,
};

const styles = (props: Omit<TypographyProps, "children">): CSSProperties => ({
  fontSize: fontSizeGetter(props.size),
  color: props.color,
  fontWeight: props.fw,
  textAlign: props.align,
});

export const Text = ({ children, size = "sm", color, fw }: TypographyProps) => {
  const style = styles({ size, color, fw });
  return <p style={style}>{children}</p>;
};
