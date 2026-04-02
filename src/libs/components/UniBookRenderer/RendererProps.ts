import { MapImageUrlFn, MapPageUrlFn } from "@/contexts";
import { PageInput, RendererComponents } from "@/types";
import { OverrideBlocks } from "@/types/override.type";

export type UniBookRendererProps = {
  page: PageInput;
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
