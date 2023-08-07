import classes from "./divider.module.css";

interface Props {
  spacingY?: number;
  spacingX?: number;
  spacing?: string | number;
  color?: string;
}

export const Divider = ({ spacing, spacingX, spacingY, color }: Props) => (
  <div
    className={classes.divider}
    style={{
      padding: spacing ?? `${spacingY ?? 0}px ${spacingX ?? 0}px`,
      borderColor: color,
    }}
  ></div>
);
