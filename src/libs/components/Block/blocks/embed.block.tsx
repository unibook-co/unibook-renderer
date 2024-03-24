import { useRef } from 'react';

import { useRendererContext } from '@/hooks/useRendererContext';

import { BlockProps } from '../BlockProps';
import { OverrideBlockDecorator } from '../OverrideBlockDecorator';

import { AssetWrapper } from './components/assetWrapper';

// embed
export function EmbedBlock(props: BlockProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { overrideBlocks } = useRendererContext();

    const { block, hideBlockId } = props;

    const blockId = hideBlockId ? 'notion-block' : `notion-block-${block.id}`;

    return (
        <OverrideBlockDecorator
            blockRef={ref}
            props={props}
            Block={overrideBlocks.Embed}
        >
            <AssetWrapper blockId={blockId} block={block} ref={ref} />;
        </OverrideBlockDecorator>
    );
}
