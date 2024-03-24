import { useRef } from "react";
import { OverrideBlockDecorator } from "../OverrideBlockDecorator";

import { BlockProps } from "../BlockProps";
import { useRendererContext } from "@/hooks/useRendererContext";
import { RichText } from "./components/richText";
import { getListNumber } from "@/utils/getListNumber";
import { cs } from "@/utils/cn";

export function NumberedListBlock(props: BlockProps) {
  const ref = useRef<HTMLLIElement>(null);
  const ctx = useRendererContext();
  const { page, overrideBlocks } = ctx;

  const { block, children, hideBlockId } = props;

  const blockId = hideBlockId ? "notion-block" : `notion-block-${block.id}`;

  const wrapList = (content: React.ReactNode, start?: number) => (
    <ol
      start={start}
      className={cs("notion-list", "notion-list-numbered", blockId)}
    >
      {content}
    </ol>
  );

  let output: JSX.Element | null = null;

  if (block.content) {
    output = (
      <>
        {block.properties && (
          <OverrideBlockDecorator
            blockRef={ref}
            props={props}
            Block={overrideBlocks.NumberedList}
          >
            <li ref={ref}>
              <RichText value={block.properties.title} block={block} />
            </li>
          </OverrideBlockDecorator>
        )}
        {wrapList(children)}
      </>
    );
  } else {
    output = block.properties ? (
      <OverrideBlockDecorator
        blockRef={ref}
        props={props}
        Block={overrideBlocks.NumberedList}
      >
        <li ref={ref}>
          <RichText value={block.properties.title} block={block} />
        </li>
      </OverrideBlockDecorator>
    ) : null;
  }

  const isTopLevel = block.type !== page.blockMap[block.parent_id]?.value?.type;
  const start = getListNumber(block.id, page.blockMap);

  return isTopLevel ? wrapList(output, start) : output;
}
