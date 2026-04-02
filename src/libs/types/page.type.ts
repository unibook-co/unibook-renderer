import { Block } from './block.type';
import { Role } from './core.type';

export interface BlockMapEntry {
    role: Role;
    value: Block;
}

export interface PreviewImage {
    originalWidth: number;
    originalHeight: number;
    dataURIBase64: string;
}
export interface PreviewImageMap {
    [url: string]: PreviewImage | null;
}

export interface BlockMap {
    [key: string]: BlockMapEntry;
}

export interface RecordMapV3BlockEntry {
    spaceId?: string;
    value: BlockMapEntry;
}

export interface RecordMapV3BlockMap {
    [key: string]: RecordMapV3BlockEntry;
}

export type PageMap = {
    blockMap: BlockMap;
    signed_urls: {
        [key: string]: string;
    };
    preview_images?: PreviewImageMap;
};

export type PageInputBlockMap = BlockMap | RecordMapV3BlockMap;

export type PageInput = Omit<PageMap, 'blockMap'> & {
    [key: string]: unknown;
    __version__?: number;
    block?: PageInputBlockMap;
    blockMap?: PageInputBlockMap;
};
