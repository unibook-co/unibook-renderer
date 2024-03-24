import { useRef } from "react";

import { useRendererContext } from "@/hooks/useRendererContext";
import { cs } from "@/libs/renderer-utils";
import { RichText } from "./components/richText";
import { OverrideBlockDecorator } from "../OverrideBlockDecorator";

import { BlockProps } from "../BlockProps";

export function ToggleBlock(props: BlockProps) {
  const ref = useRef<HTMLDetailsElement>(null);
  const { overrideBlocks } = useRendererContext();
  const { block, children, hideBlockId } = props;

  const blockId = hideBlockId ? "notion-block" : `notion-block-${block.id}`;

  return (
    <OverrideBlockDecorator
      blockRef={ref}
      props={props}
      Block={overrideBlocks.Toggle}
    >
      <details className={cs("notion-toggle", blockId)} ref={ref}>
        <summary>
          <RichText value={block.properties?.title} block={block} />
        </summary>
        <div>{children}</div>
      </details>
    </OverrideBlockDecorator>
  );
}
