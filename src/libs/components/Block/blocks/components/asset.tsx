/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRendererContext } from "@/hooks/useRendererContext";
import { getTextContent } from "@/libs/renderer-utils";
import { BaseContentBlock, Block } from "@/types";
import * as React from "react";
import { LazyImage } from "./lazyImage";
import { getYoutubeId } from "@/utils/getYoutubeId";
import { LiteYouTubeEmbed } from "./liteYoutubeEmbed";

const isServer = typeof window === "undefined";

const supportedAssetTypes = ["video", "image", "embed", "maps", "pdf", "drive"];

export const Asset: React.FC<{
  block: BaseContentBlock;
  children: any;
  zoomAble?: boolean;
}> = ({ block, zoomAble = true, children }) => {
  const { page, mapImageUrl, components } = useRendererContext();

  if (!block || !supportedAssetTypes.includes(block.type)) {
    return null;
  }

  const style: React.CSSProperties = {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignSelf: "center",
    width: "100%",
    maxWidth: "100%",
    flexDirection: "column",
  };

  const assetStyle: React.CSSProperties = {};

  if (block.format) {
    const {
      block_aspect_ratio,
      block_height,
      block_width,
      block_page_width,
      block_preserve_scale,
    } = block.format;

    if (block_page_width) {
      style.width = "100%";

      if (block.type === "video") {
        if (block_height) {
          style.height = block_height;
        } else if (block_aspect_ratio) {
          style.paddingBottom = `${block_aspect_ratio * 100}%`;
        } else if (block_preserve_scale) {
          style.objectFit = "contain";
        }
      } else if (block_aspect_ratio && block.type !== "image") {
        style.paddingBottom = `${block_aspect_ratio * 100}%`;
      } else if (block_height) {
        style.height = block_height;
      } else if (block_preserve_scale) {
        if (block.type === "image") {
          style.height = "100%";
        } else {
          // TODO: this is just a guess
          style.paddingBottom = "75%";
          style.minHeight = 100;
        }
      }
    } else {
      switch (block.format?.block_alignment) {
        case "center": {
          style.alignSelf = "center";
          break;
        }
        case "left": {
          style.alignSelf = "start";
          break;
        }
        case "right": {
          style.alignSelf = "end";
          break;
        }
      }

      if (block_width) {
        style.width = `min(100%, ${block_width}px)`;
        style.maxWidth = `min(100%, ${block_width}px)`;
      }

      if (block_preserve_scale && block.type !== "image") {
        style.paddingBottom = "50%";
        style.minHeight = 100;
      } else {
        if (block_height && block.type !== "image") {
          style.height = block_height;
        }
      }
    }

    if (block.type === "image") {
      assetStyle.objectFit = "cover";
    } else if (block_preserve_scale) {
      assetStyle.objectFit = "contain";
    }
  }

  let source =
    page.signed_urls?.[block.id] || block.properties?.source?.[0]?.[0];
  let content = null;

  if (!source) {
    return null;
  }

  if (block.type === "pdf") {
    style.overflow = "auto";
    style.background = "rgb(226, 226, 226)";
    style.display = "block";

    if (!style.padding) {
      style.padding = "8px 16px";
    }

    if (!isServer) {
      // console.log('pdf', block, signedUrl)
      content = <components.PDF file={source} />;
    }
  } else if (block.type === "embed" || block.type === "video") {
    if (
      block.type === "video" &&
      source &&
      source.indexOf("youtube") < 0 &&
      source.indexOf("youtu.be") < 0 &&
      source.indexOf("vimeo") < 0 &&
      source.indexOf("wistia") < 0 &&
      source.indexOf("loom") < 0 &&
      source.indexOf("videoask") < 0 &&
      source.indexOf("getcloudapp") < 0
    ) {
      style.paddingBottom = undefined;

      content = (
        <video
          playsInline
          controls
          preload="metadata"
          style={assetStyle}
          src={source}
          title={block.type}
        />
      );
    } else {
      const src = block.format?.display_source || source;

      if (src) {
        const youtubeVideoId: string | null =
          block.type === "video" ? getYoutubeId(src) : null;

        if (youtubeVideoId) {
          content = (
            <LiteYouTubeEmbed
              id={youtubeVideoId}
              style={assetStyle}
              className="notion-asset-object-fit"
            />
          );
        } else {
          content = (
            <iframe
              className="notion-asset-object-fit"
              style={assetStyle}
              src={src}
              title={`iframe ${block.type}`}
              allowFullScreen
              loading="lazy"
            />
          );
        }
      }
    }
  } else if (block.type === "image") {
    // console.log('image', block)
    //kind of a hack for now. New file.notion.so images aren't signed correctly
    if (source.includes("file.notion.so")) {
      source = block.properties?.source?.[0]?.[0];
    }
    const src = mapImageUrl(source, block as Block);
    const caption = getTextContent(block.properties?.caption);
    const alt = caption || "notion image";

    content = (
      <LazyImage
        src={src}
        alt={alt}
        zoomAble={zoomAble}
        height={style.height as number}
        style={assetStyle}
      />
    );
  }

  return (
    <>
      <div style={style}>
        {content}
        {block.type === "image" && children}
      </div>

      {block.type !== "image" && children}
    </>
  );
};
