import { useRef } from "react";
import { OverrideBlockDecorator } from "../OverrideBlockDecorator";

import { BlockProps } from "../BlockProps";
import { useRendererContext } from "@/hooks/useRendererContext";
import { cs } from "@/libs/renderer-utils";

export function ColumnListBlock(props: BlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { block, children, hideBlockId } = props;
  const { overrideBlocks } = useRendererContext();

  const blockId = hideBlockId ? "notion-block" : `notion-block-${block.id}`;

  return (
    <OverrideBlockDecorator
      blockRef={ref}
      props={props}
      Block={overrideBlocks.ColumnList}
    >
      <div className={cs("notion-row", blockId)} ref={ref}>
        {children}
      </div>
    </OverrideBlockDecorator>
  );
}
