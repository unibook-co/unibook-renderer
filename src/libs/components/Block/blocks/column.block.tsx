import { useRef } from "react";
import { OverrideBlockDecorator } from "../OverrideBlockDecorator";

import { BlockProps } from "../BlockProps";
import { useRendererContext } from "@/hooks/useRendererContext";
import { cs } from "@/libs/renderer-utils";

// column
export function ColumnBlock(props: BlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const ctx = useRendererContext();
  const { page, overrideBlocks } = ctx;

  const { block, children, hideBlockId } = props;

  const blockId = hideBlockId ? "notion-block" : `notion-block-${block.id}`;

  // note: notion uses 46px
  const spacerWidth = `min(32px, 4vw)`;
  const ratio = block.format?.column_ratio || 0.5;
  const parent = page.blockMap[block.parent_id]?.value;
  const columns =
    parent?.content?.length || Math.max(2, Math.ceil(1.0 / ratio));

  const width = `calc((100% - (${columns - 1} * ${spacerWidth})) * ${ratio})`;
  const style = { width };

  return (
    <OverrideBlockDecorator
      blockRef={ref}
      Block={overrideBlocks.Column}
      props={props}
    >
      <div
        data-block-id={props.block.id}
        className={cs("notion-column", blockId)}
        style={style}
        ref={ref}
      >
        {children}
      </div>
      <div className="notion-spacer" />
    </OverrideBlockDecorator>
  );
}
