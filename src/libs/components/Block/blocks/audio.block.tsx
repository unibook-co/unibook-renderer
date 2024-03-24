import { useRef } from "react";

import { useRendererContext } from "@/hooks/useRendererContext";
import { cs } from "@/libs/renderer-utils";
import { OverrideBlockDecorator } from "../OverrideBlockDecorator";

import { BlockProps } from "../BlockProps";

export function AudioBlock(props: BlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { block, hideBlockId } = props;
  const { page, overrideBlocks } = useRendererContext();

  const source =
    page.signed_urls[block.id] || block.properties?.source?.[0]?.[0];

  const blockId = hideBlockId ? "notion-block" : `notion-block-${block.id}`;

  return (
    <OverrideBlockDecorator
      blockRef={ref}
      props={props}
      Block={overrideBlocks.Audio}
    >
      <div
        className={cs("notion-audio", blockId)}
        data-block-id={props.block.id}
      >
        <audio controls preload="none" src={source} />
      </div>
    </OverrideBlockDecorator>
  );
}
