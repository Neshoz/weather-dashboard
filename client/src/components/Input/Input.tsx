import { HTMLProps, ReactNode } from "react";
import { Flex } from "../Flex";
import classes from "./input.module.css";

interface InputProps extends HTMLProps<HTMLInputElement> {
  leftIcon?: ReactNode;
}

export const Input = ({ leftIcon, ...rest }: InputProps) => {
  return (
    <Flex align="center" className={classes.wrapper}>
      <div className={classes.icon}>{leftIcon}</div>
      <input className={classes.input} {...rest} />
    </Flex>
  );
};
