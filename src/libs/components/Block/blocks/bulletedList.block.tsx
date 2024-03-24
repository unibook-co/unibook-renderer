import { useRef } from "react";

import { useRendererContext } from "@/hooks/useRendererContext";
import { cs } from "@/libs/renderer-utils";
import { RichText } from "./components/richText";
import { OverrideBlockDecorator } from "../OverrideBlockDecorator";

import { BlockProps } from "../BlockProps";

// bulleted_list
export function BulletedListBlock(props: BlockProps) {
  const ref = useRef<HTMLLIElement>(null);
  const ctx = useRendererContext();
  const { page, overrideBlocks } = ctx;

  const { block, children, hideBlockId } = props;

  const blockId = hideBlockId ? "notion-block" : `notion-block-${block.id}`;

  const wrapList = (content: React.ReactNode) => (
    <ul className={cs("notion-list", "notion-list-disc", blockId)}>
      {content}
    </ul>
  );

  let output: JSX.Element | null = null;

  if (block.content) {
    output = (
      <>
        {block.properties && (
          <OverrideBlockDecorator
            blockRef={ref}
            props={props}
            Block={overrideBlocks.BulletedList}
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
        Block={overrideBlocks.BulletedList}
      >
        <li ref={ref} data-block-id={props.block.id}>
          <RichText value={block.properties.title} block={block} />
        </li>
      </OverrideBlockDecorator>
    ) : null;
  }

  const isTopLevel = block.type !== page.blockMap[block.parent_id]?.value?.type;

  return isTopLevel ? wrapList(output) : output;
}
