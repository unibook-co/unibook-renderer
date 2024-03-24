import { useRef } from "react";

import { useRendererContext } from "@/hooks/useRendererContext";
import { OverrideBlockDecorator } from "../OverrideBlockDecorator";

import { BlockProps } from "../BlockProps";
import { EquationBlock } from "@/types";

export function EquationBlock(props: BlockProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const { components, overrideBlocks } = useRendererContext();
  const { block, hideBlockId } = props;

  const blockId = hideBlockId ? "notion-block" : `notion-block-${block.id}`;

  return (
    <OverrideBlockDecorator
      props={props}
      Block={overrideBlocks.Equation}
      blockRef={ref}
    >
      <components.Equation
        block={block as EquationBlock}
        inline={false}
        className={blockId}
        ref={ref}
      />
    </OverrideBlockDecorator>
  );
}
