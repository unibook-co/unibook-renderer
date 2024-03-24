import { useRef } from "react";

import { FileIcon } from "@/components/icons/FileIcon";
import { useRendererContext } from "@/hooks/useRendererContext";
import { cs } from "@/libs/renderer-utils";

import { BlockProps } from "../BlockProps";
import { OverrideBlockDecorator } from "../OverrideBlockDecorator";


import { RichText } from "./components/richText";


export function FileBlock(props: BlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { block, hideBlockId } = props;
  const { components, page, overrideBlocks } = useRendererContext();

  const blockId = hideBlockId ? "notion-block" : `notion-block-${block.id}`;

  const source =
    page.signed_urls[block.id] || block.properties?.source?.[0]?.[0];

  return (
    <OverrideBlockDecorator
      props={props}
      blockRef={ref}
      Block={overrideBlocks.File}
    >
      <div
        className={cs("notion-file", blockId)}
        data-block-id={props.block.id}
      >
        <components.Link
          className="notion-file-link"
          href={source}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FileIcon className="notion-file-icon" />

          <div className="notion-file-info">
            <div className="notion-file-title">
              <RichText
                value={block.properties?.title || [["File"]]}
                block={block}
              />
            </div>

            {block.properties?.size && (
              <div className="notion-file-size">
                <RichText value={block.properties.size} block={block} />
              </div>
            )}
          </div>
        </components.Link>
      </div>
    </OverrideBlockDecorator>
  );
}
