import { useRef } from "react";

import { useRendererContext } from "@/hooks/useRendererContext";
import { cs } from "@/libs/renderer-utils";

import { BlockProps } from "../BlockProps";
import { OverrideBlockDecorator } from "../OverrideBlockDecorator";


// divider
export function DividerBlock(props: BlockProps) {
  const ref = useRef<HTMLHRElement>(null);
  const { overrideBlocks } = useRendererContext();
  const { block, hideBlockId } = props;

  const blockId = hideBlockId ? "notion-block" : `notion-block-${block.id}`;

  return (
    <OverrideBlockDecorator
      blockRef={ref}
      props={props}
      Block={overrideBlocks.Divider}
    >
      <hr
        data-block-id={props.block.id}
        className={cs("notion-hr", blockId)}
        ref={ref}
      />
    </OverrideBlockDecorator>
  );
}
