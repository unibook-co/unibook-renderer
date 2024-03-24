import { useRef } from "react";

import { useRendererContext } from "@/hooks/useRendererContext";
import { cs } from "@/libs/renderer-utils";
import { OverrideBlockDecorator } from "../OverrideBlockDecorator";
import { BlockProps } from "../BlockProps";

export function TableBlock(props: BlockProps) {
  const ref = useRef<HTMLTableElement>(null);
  const { overrideBlocks } = useRendererContext();
  const { block, children, hideBlockId } = props;

  const blockId = hideBlockId ? "notion-block" : `notion-block-${block.id}`;

  return (
    <OverrideBlockDecorator
      blockRef={ref}
      props={props}
      Block={overrideBlocks.Table}
    >
      <table
        className={cs("notion-simple-table", blockId)}
        ref={ref}
        data-block-id={props.block.id}
      >
        <tbody>{children}</tbody>
      </table>
    </OverrideBlockDecorator>
  );
}
