import * as React from 'react';

import { BlockRenderer } from '@/components/BlockRenderer/BlockRenderer';
import { Block, SyncPointerBlock as SyncPointerBlockType } from '@/types';

export const SyncPointerBlock: React.FC<{
    block: Block;
    level: number;
}> = ({ block, level }) => {
    if (!block) {
        if (process.env.NODE_ENV !== 'production') {
            console.warn('missing sync pointer block');
        }

        return null;
    }

    const syncPointerBlock = block as SyncPointerBlockType;
    const referencePointerId =
        syncPointerBlock?.format?.transclusion_reference_pointer?.id;

    if (!referencePointerId) {
        return null;
    }

    return (
        <BlockRenderer
            key={referencePointerId}
            level={level}
            blockId={referencePointerId}
        />
    );
};
