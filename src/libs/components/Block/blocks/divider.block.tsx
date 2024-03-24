import { useRef } from "react";

import { useRendererContext } from "@/hooks/useRendererContext";
import { cs } from "@/libs/renderer-utils";
import { OverrideBlockDecorator } from "../OverrideBlockDecorator";

import { BlockProps } from "../BlockProps";

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
      <hr className={cs("notion-hr", blockId)} ref={ref} />
    </OverrideBlockDecorator>
  );
}
