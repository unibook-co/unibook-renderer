import { useRef } from "react";

import { useRendererContext } from "@/hooks/useRendererContext";
import { cs, getBlockParentPage } from "@/libs/renderer-utils";
import { OverrideBlockDecorator } from "../OverrideBlockDecorator";

import { BlockProps } from "../BlockProps";
import { getPageTableOfContents } from "@/libs/renderer-utils/getPageTableOfContents";

export function TableOfContentsBlock(props: BlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { page, overrideBlocks } = useRendererContext();
  const { block, hideBlockId } = props;

  const blockId = hideBlockId ? "notion-block" : `notion-block-${block.id}`;

  const pageBlock = getBlockParentPage(block, page);
  if (!pageBlock) return null;

  const toc = getPageTableOfContents(pageBlock, page);
  const blockColor = block.format?.block_color;

  return (
    <OverrideBlockDecorator
      blockRef={ref}
      props={props}
      Block={overrideBlocks.TableOfContents}
    >
      <div
        className={cs(
          "notion-table-of-contents",
          blockColor && `notion-${blockColor}`,
          blockId
        )}
        ref={ref}
      >
        {toc.map((tocItem) => (
          <a
            key={tocItem.id}
            href={`#${tocItem.id}`}
            className="notion-table-of-contents-item"
          >
            <span
              className="notion-table-of-contents-item-body"
              style={{
                display: "inline-block",
                marginLeft: tocItem.indentLevel * 24,
              }}
            >
              {tocItem.text}
            </span>
          </a>
        ))}
      </div>
    </OverrideBlockDecorator>
  );
}
