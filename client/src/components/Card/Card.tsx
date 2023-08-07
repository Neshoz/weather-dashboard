import { ReactNode } from "react";
import classes from "./card.module.css";

interface Props {
  p?: number;
  width?: string | number;
  height?: string | number;
  children: ReactNode;
}

export const Card = ({ children, p, width, height }: Props) => (
  <div className={classes.root} style={{ padding: p, width, height }}>
    {children}
  </div>
);
