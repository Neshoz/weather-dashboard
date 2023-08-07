import { HTMLProps } from "react";

const DEFAULT_PADDING = "40px 28px";

export const PaddedArea = ({
  children,
  height,
  width,
  ...rest
}: HTMLProps<HTMLDivElement>) => (
  <div style={{ padding: DEFAULT_PADDING, height, width }} {...rest}>
    {children}
  </div>
);
