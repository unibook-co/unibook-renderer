import { useRef } from "react";
import { OverrideBlockDecorator } from "../OverrideBlockDecorator";

import { BlockProps } from "../BlockProps";
import { cs } from "@/libs/renderer-utils";
import { PageIcon } from "./components/pageIcon";
import { RichText } from "./components/richText";
import { useRendererContext } from "@/hooks/useRendererContext";

export function CalloutBlock(props: BlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { overrideBlocks } = useRendererContext();

  const { block, children, hideBlockId } = props;

  const blockId = hideBlockId ? "notion-block" : `notion-block-${block.id}`;

  return (
    <OverrideBlockDecorator
      Block={overrideBlocks.Callout}
      props={props}
      blockRef={ref}
    >
      <div
        className={cs(
          "notion-callout",
          block.format?.block_color && `notion-${block.format?.block_color}_co`,
          blockId
        )}
        data-block-id={props.block.id}
        ref={ref}
      >
        <PageIcon block={block} />

        <div className="notion-callout-text">
          <RichText value={block.properties?.title} block={block} />
          {children}
        </div>
      </div>
    </OverrideBlockDecorator>
  );
}