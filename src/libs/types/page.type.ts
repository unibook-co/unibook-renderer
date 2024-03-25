import { Block } from './block.type';

export interface PreviewImage {
    originalWidth: number;
    originalHeight: number;
    dataURIBase64: string;
}
export interface PreviewImageMap {
    [url: string]: PreviewImage | null;
}

export interface BlockMap {
    [key: string]: {
        role: 'editor' | 'reader' | 'none' | 'read_and_write';
        value: Block;
    };
}

export type PageMap = {
    blockMap: BlockMap;
    signed_urls: {
        [key: string]: string;
    };
    preview_images?: PreviewImageMap;
};
