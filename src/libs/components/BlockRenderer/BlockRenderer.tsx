import { useRendererContext } from "@/hooks/useRendererContext";

import { Block } from "../Block/Block";

import { BlockRendererProps } from "./BlockRendererProps";

export function BlockRenderer({
  blockId,
  level = 0,
  ...rest
}: BlockRendererProps) {
  const { page } = useRendererContext();
  const id = blockId || Object.keys(page.blockMap)[0];
  const block = page.blockMap[id]?.value;

  if (!block) {
    if (process.env.NODE_ENV !== "production") {
      console.warn("missing block", blockId);
    }
    return null;
  }

  return (
    <Block key={id} level={level} block={block} {...rest}>
      {block?.content?.map((contentBlockId) => (
        <BlockRenderer
          key={contentBlockId}
          blockId={contentBlockId}
          level={level + 1}
          {...rest}
        />
      ))}
    </Block>
  );
}
