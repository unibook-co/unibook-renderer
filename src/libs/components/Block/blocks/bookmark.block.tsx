import { useRef } from "react";

import { useRendererContext } from "@/hooks/useRendererContext";
import { cs, getTextContent } from "@/libs/renderer-utils";
import { RichText } from "./components/richText";
import { OverrideBlockDecorator } from "../OverrideBlockDecorator";

import { BlockProps } from "../BlockProps";
import { LazyImage } from "./components/lazyImage";

export function BookmarkBlock(props: BlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const ctx = useRendererContext();
  const { components, mapImageUrl, overrideBlocks } = ctx;

  const { block, hideBlockId } = props;

  const blockId = hideBlockId ? "notion-block" : `notion-block-${block.id}`;

  if (!block.properties) return null;

  const link = block.properties.link;
  if (!link || !link[0]?.[0]) return null;

  let title = getTextContent(block.properties.title);
  if (!title) {
    title = getTextContent(link);
  }

  if (title) {
    if (title.startsWith("http")) {
      try {
        const url = new URL(title);
        title = url.hostname;
      } catch (err) {
        // ignore invalid links
      }
    }
  }

  return (
    <OverrideBlockDecorator
      Block={overrideBlocks.Bookmark}
      props={props}
      blockRef={ref}
    >
      <div data-block-id={props.block.id} className="notion-row" ref={ref}>
        <components.Link
          target="_blank"
          rel="noopener noreferrer"
          className={cs(
            "notion-bookmark",
            block.format?.block_color && `notion-${block.format.block_color}`,
            blockId
          )}
          href={link[0][0]}
        >
          <div>
            {title && (
              <div className="notion-bookmark-title">
                <RichText value={[[title]]} block={block} />
              </div>
            )}

            {block.properties?.description && (
              <div className="notion-bookmark-description">
                <RichText value={block.properties?.description} block={block} />
              </div>
            )}

            <div className="notion-bookmark-link">
              {block.format?.bookmark_icon && (
                <div className="notion-bookmark-link-icon">
                  <LazyImage
                    src={mapImageUrl(block.format?.bookmark_icon, block)}
                    alt={title}
                  />
                </div>
              )}

              <div className="notion-bookmark-link-text">
                <RichText value={link} block={block} />
              </div>
            </div>
          </div>

          {block.format?.bookmark_cover && (
            <div className="notion-bookmark-image">
              <LazyImage
                src={mapImageUrl(block.format?.bookmark_cover, block)}
                alt={getTextContent(block.properties?.title)}
                style={{
                  objectFit: "cover",
                }}
              />
            </div>
          )}
        </components.Link>
      </div>
    </OverrideBlockDecorator>
  );
}
