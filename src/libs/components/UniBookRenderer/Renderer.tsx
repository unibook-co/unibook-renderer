import { useMemo } from "react";
import { UniBookRendererProps } from "./RendererProps";
import { getMediumZoomMargin } from "@/utils/getMediumZoomMargin";
import mediumZoom from "@fisch0920/medium-zoom";
import { RendererContextProvider } from "@/contexts";
import { BlockRenderer } from "../BlockRenderer/BlockRenderer";

export function UniBookRenderer({
  components,
  overrideBlocks,
  page,
  mapPageUrl,
  mapImageUrl,
  darkMode,
  isImageZoomAble,
  ...rest
}: UniBookRendererProps) {
  const zoom = useMemo(
    () =>
      typeof window !== "undefined" &&
      mediumZoom({
        background: "rgba(0, 0, 0, 0.8)",
        minZoomScale: 2.0,
        margin: getMediumZoomMargin(),
      }),
    []
  );

  return (
    <RendererContextProvider
      page={page}
      components={components}
      overrideBlocks={overrideBlocks}
      mapPageUrl={mapPageUrl}
      mapImageUrl={mapImageUrl}
      darkMode={darkMode || false}
      zoom={isImageZoomAble ? zoom : null}
    >
      <BlockRenderer {...rest} />
    </RendererContextProvider>
  );
}
