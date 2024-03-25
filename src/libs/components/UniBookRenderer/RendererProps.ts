import { MapImageUrlFn, MapPageUrlFn } from "@/contexts";
import { PageMap, RendererComponents } from "@/types";
import { OverrideBlocks } from "@/types/override.type";

export type UniBookRendererProps = {
  page: PageMap;
  components?: Partial<RendererComponents>;
  overrideBlocks?: Partial<OverrideBlocks>;

  mapPageUrl?: MapPageUrlFn;
  mapImageUrl?: MapImageUrlFn;
  darkMode?: boolean;
  blockId?: string;
  hideBlockId?: boolean;
  isImageZoomAble?: boolean;

  maxWidth?: string;
};
