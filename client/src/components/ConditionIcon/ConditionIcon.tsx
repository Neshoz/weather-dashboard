import { BsImage } from "react-icons/bs";
import { Code } from "../../api/types";
import { iconByCode } from "./icon-by-code";

interface Props {
  code: Code;
  size?: number;
  color?: string;
}

export const ConditionIcon = ({
  code,
  size = 20,
  color = "currentColor",
}: Props) => {
  const Icon = iconByCode[code];

  if (!Icon) {
    return <BsImage size={size} color={color} />;
  }

  return <Icon size={size} color={color} />;
};
