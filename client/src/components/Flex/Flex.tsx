import { HTMLProps, ReactNode } from "react";
import classes from "./flex.module.css";

type Position = "start" | "center" | "end" | "between";
type Direction = "row" | "column";

interface Props extends HTMLProps<HTMLDivElement> {
  justify?: Position;
  align?: Position;
  flex?: string;
  direction?: Direction;
  gap?: number;
  children: ReactNode;
  pb?: number;
  pt?: number;
}

const justifyClassNameByPosition: Record<Position, string> = {
  start: classes.justifyStart,
  center: classes.justifyCenter,
  end: classes.justifyEnd,
  between: classes.justifyBetween,
};
const alignClassNameByPosition: Record<Position, string> = {
  start: classes.alignStart,
  center: classes.alignCenter,
  end: classes.alignEnd,
  between: classes.alignBetween,
};
const directionClassName: Record<Direction, string> = {
  column: classes.dirColumn,
  row: classes.dirRow,
};

export const Flex = ({
  justify = "start",
  align = "start",
  direction = "row",
  gap,
  children,
  className,
  pb,
  pt,
  flex,
  ...rest
}: Props) => {
  const _classNames = [
    classes.flex,
    alignClassNameByPosition[align],
    justifyClassNameByPosition[justify],
    directionClassName[direction],
    className,
  ].join(" ");

  return (
    <div
      {...rest}
      className={_classNames}
      style={{ gap, flex, paddingBottom: pb, paddingTop: pt, ...rest.style }}
    >
      {children}
    </div>
  );
};
