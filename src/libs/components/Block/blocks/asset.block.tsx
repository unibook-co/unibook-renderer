import { useRef } from "react";

import { useRendererContext } from "@/hooks/useRendererContext";
import { OverrideBlockDecorator } from "../OverrideBlockDecorator";
import { BlockProps } from "../BlockProps";
import { AssetWrapper } from "./components/assetWrapper";

export function AssetBlock(props: BlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { block, hideBlockId } = props;
  const { overrideBlocks } = useRendererContext();

  const blockId = hideBlockId ? "notion-block" : `notion-block-${block.id}`;

  return (
    <OverrideBlockDecorator
      blockRef={ref}
      props={props}
      Block={overrideBlocks.Asset}
    >
      <AssetWrapper blockId={blockId} block={block} />
    </OverrideBlockDecorator>
  );
}
