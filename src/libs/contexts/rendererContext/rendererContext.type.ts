/* eslint-disable @typescript-eslint/no-explicit-any */
import { Block, RendererComponents, PageMap } from '@/types';
import { OverrideBlocks } from '@/types/override.type';

export type MapPageUrlFn = (
    pageId: string,
    blockMap?: PageMap['blockMap']
) => string;
export type MapImageUrlFn = (
    url: string | undefined,
    block: Block
) => string | undefined;

export interface RendererContextValue {
    page: PageMap;
    components: RendererComponents;
    overrideBlocks: OverrideBlocks;

    darkMode: boolean;
    zoom: any;

    mapPageUrl: MapPageUrlFn;
    mapImageUrl: MapImageUrlFn;
}
