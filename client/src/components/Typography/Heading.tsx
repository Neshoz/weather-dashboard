import { createElement, CSSProperties } from "react";
import { TypographyProps } from "./types";

interface Props extends TypographyProps {
  level?: 1 | 2 | 3 | 4;
}

const elementByLevel = {
  1: "h1",
  2: "h2",
  3: "h3",
  4: "h4",
};

const styles = (props: Omit<Props, "children">): CSSProperties => ({
  paddingBottom: props.pb,
});

export const Heading = ({ children, level = 1, ...rest }: Props) => {
  return createElement(elementByLevel[level], {
    children,
    style: styles(rest),
    ...rest,
  });
};
