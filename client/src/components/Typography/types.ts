import { ReactNode } from "react";

export interface TypographyProps {
  children: ReactNode;
  size?: "sm" | "md" | "lg" | number;
  color?: string;
  fw?: number;
  align?: "left" | "right";
  pb?: number;
}
