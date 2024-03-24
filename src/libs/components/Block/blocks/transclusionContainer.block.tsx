import { useRef } from "react";

import { useRendererContext } from "@/hooks/useRendererContext";
import { cs } from "@/libs/renderer-utils";
import { OverrideBlockDecorator } from "../OverrideBlockDecorator";

import { BlockProps } from "../BlockProps";

export function TransclusionContainerBlock(props: BlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { overrideBlocks } = useRendererContext();
  const { block, children, hideBlockId } = props;

  const blockId = hideBlockId ? "notion-block" : `notion-block-${block.id}`;

  return (
    <OverrideBlockDecorator
      blockRef={ref}
      props={props}
      Block={overrideBlocks.TransclusionContainer}
    >
      <div
        className={cs("notion-sync-block", blockId)}
        ref={ref}
        data-block-id={props.block.id}
      >
        {children}
      </div>
    </OverrideBlockDecorator>
  );
}
