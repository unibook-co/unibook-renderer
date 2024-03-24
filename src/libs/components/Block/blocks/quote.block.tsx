import { useRef } from "react";

import { useRendererContext } from "@/hooks/useRendererContext";
import { cs } from "@/libs/renderer-utils";

import { BlockProps } from "../BlockProps";
import { OverrideBlockDecorator } from "../OverrideBlockDecorator";

import { RichText } from "./components/richText";


export function QuoteBlock(props: BlockProps) {
  const ref = useRef<HTMLQuoteElement>(null);
  const { block, children, hideBlockId } = props;
  const { overrideBlocks } = useRendererContext();

  const blockId = hideBlockId ? "notion-block" : `notion-block-${block.id}`;

  if (!block.properties) return null;

  const blockColor = block.format?.block_color;

  return (
    <OverrideBlockDecorator
      blockRef={ref}
      props={props}
      Block={overrideBlocks.Quote}
    >
      <blockquote
        className={cs(
          "notion-quote",
          blockColor && `notion-${blockColor}`,
          blockId
        )}
        ref={ref}
        data-block-id={props.block.id}
      >
        <div>
          <RichText value={block.properties.title} block={block} />
        </div>
        {children}
      </blockquote>
    </OverrideBlockDecorator>
  );
}
