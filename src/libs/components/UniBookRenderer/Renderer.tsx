import { useMemo } from 'react';

import mediumZoom from '@fisch0920/medium-zoom';

import { RendererContextProvider } from '@/contexts';
import {
    BlockMap,
    PageInput,
    PageInputBlockMap,
    PageMap,
    RecordMapV3BlockEntry,
} from '@/types';
import { getMediumZoomMargin } from '@/utils/getMediumZoomMargin';

import { BlockRenderer } from '../BlockRenderer/BlockRenderer';

import { UniBookRendererProps } from './RendererProps';

function isRecordMapV3BlockEntry(
    entry: PageInputBlockMap[string] | undefined
): entry is RecordMapV3BlockEntry {
    if (!entry || typeof entry !== 'object' || !('value' in entry)) {
        return false;
    }

    const nestedValue = entry.value;

    return Boolean(
        nestedValue &&
            typeof nestedValue === 'object' &&
            'role' in nestedValue &&
            'value' in nestedValue &&
            nestedValue.value &&
            typeof nestedValue.value === 'object' &&
            'id' in nestedValue.value
    );
}

function isRecordMapV3Page(
    page: PageInput,
    blockMap: PageInputBlockMap | undefined
): boolean {
    if (page.__version__ === 3) {
        return true;
    }

    const firstEntry = blockMap ? Object.values(blockMap)[0] : undefined;
    return isRecordMapV3BlockEntry(firstEntry);
}

function normalizePage(page: PageInput): PageMap {
    const inputBlockMap = page.blockMap ?? page.block;

    if (!inputBlockMap) {
        return {
            ...page,
            blockMap: {},
            signed_urls: page.signed_urls || {},
        };
    }

    if (!isRecordMapV3Page(page, inputBlockMap)) {
        if (page.blockMap) {
            return page as PageMap;
        }

        return {
            ...page,
            blockMap: inputBlockMap as BlockMap,
            signed_urls: page.signed_urls || {},
        };
    }

    const normalizedBlockMap = Object.fromEntries(
        Object.entries(inputBlockMap).map(([id, entry]) => {
            if (!isRecordMapV3BlockEntry(entry)) {
                return [id, entry];
            }

            const block = entry.value.value;

            return [
                id,
                {
                    role: entry.value.role,
                    value: {
                        ...block,
                        space_id: block.space_id || entry.spaceId,
                    },
                },
            ];
        })
    ) as BlockMap;

    return {
        ...page,
        blockMap: normalizedBlockMap,
        signed_urls: page.signed_urls || {},
    };
}

export function UniBookRenderer({
    components,
    overrideBlocks,
    page,
    mapPageUrl,
    mapImageUrl,
    darkMode,
    isImageZoomAble = true,
    ...rest
}: UniBookRendererProps) {
    const normalizedPage = useMemo(() => normalizePage(page), [page]);

    const zoom = useMemo(
        () =>
            typeof window !== 'undefined' &&
            mediumZoom({
                background: 'rgba(0, 0, 0, 0.8)',
                minZoomScale: 2.0,
                margin: getMediumZoomMargin(),
            }),
        []
    );

    return (
        <RendererContextProvider
            page={normalizedPage}
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
