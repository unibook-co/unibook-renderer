import { ComponentProps, forwardRef } from "react";

import Katex from "@matejmazur/react-katex";
import { EquationBlock } from "@/types";
import { cs, getBlockTitle } from "@/libs/renderer-utils";
const katexSettings = {
  throwOnError: false,
  strict: false,
};

export interface EquationProps extends ComponentProps<"span"> {
  block: EquationBlock;
  math?: string;
  inline?: boolean;
  className?: string;
}
export const Equation = forwardRef<HTMLSpanElement, EquationProps>(
  ({ block, math, inline = false, className, ...rest }, ref) => {
    math = math || getBlockTitle(block);
    if (!math) return null;

    return (
      <span
        tabIndex={0}
        className={cs(
          "notion-equation",
          inline ? "notion-equation-inline" : "notion-equation-block",
          className
        )}
        {...rest}
        ref={ref}
      >
        <Katex math={math} settings={katexSettings} {...rest} />
      </span>
    );
  }
);
