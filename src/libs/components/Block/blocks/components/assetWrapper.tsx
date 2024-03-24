import { ComponentProps, forwardRef } from "react";

import { Asset } from "./asset";
import { RichText } from "./richText";
import { BaseContentBlock, Block } from "@/types";
import { useRendererContext } from "@/hooks/useRendererContext";
import { cs } from "@/utils/cn";

export interface AssetWrapperProps extends ComponentProps<"div"> {
  blockId: string;
  block: Block;
}
export const AssetWrapper = forwardRef<HTMLDivElement, AssetWrapperProps>(
  (props, ref) => {
    const { blockId, block, ...rest } = props;
    const value = block as BaseContentBlock;
    const { zoom } = useRendererContext();

    return (
      <figure
        className={cs(
          "notion-asset-wrapper",
          `notion-asset-wrapper-${block.type}`,
          blockId
        )}
        data-block-id={props.block.id}
        ref={ref}
        {...rest}
      >
        <Asset block={value} zoomAble={zoom}>
          {value?.properties?.caption && (
            <figcaption className="notion-asset-caption">
              <RichText value={value.properties.caption} block={block} />
            </figcaption>
          )}
        </Asset>
      </figure>
    );
  }
);
