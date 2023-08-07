import { CSSProperties, ReactNode } from "react";
import classes from "./grid.module.css";

interface Props {
  children: ReactNode;
  gap?: number;
  rows?: number;
  columns?: number | string;
  minRowHeight?: number;
  width?: string | number;
  height?: string | number;
  pb?: number;
}

const autoRows = (minRowHeight?: number) =>
  minRowHeight ? `minmax(${minRowHeight}, auto)` : undefined;

const rowsGetter = (value?: number | string) =>
  typeof value === "number" ? `repeat(${value}, 1fr)` : value;

const style = (props: Omit<Props, "children">): CSSProperties => ({
  gridAutoRows: autoRows(props.minRowHeight),
  gridTemplateRows: rowsGetter(props.rows),
  gridTemplateColumns: rowsGetter(props.columns),
  gap: props.gap,
  height: props.height,
  width: props.width,
  paddingBottom: props.pb,
});

export const Grid = ({ children, ...rest }: Props) => {
  const styles = style(rest);
  return (
    <div className={classes.root} style={styles}>
      {children}
    </div>
  );
};
