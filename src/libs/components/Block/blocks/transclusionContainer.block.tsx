import { useRendererContext } from '@/hooks/useRendererContext';
import { cs } from '@/libs/renderer-utils';
import { SyncBlockProps } from '@/types';

import { OverrideBlockDecorator } from '../OverrideBlockDecorator';

export function TransclusionContainerBlock(props: SyncBlockProps) {
    const { overrideBlocks } = useRendererContext();
    const { children } = props;

    return (
        <OverrideBlockDecorator
            props={props}
            Block={overrideBlocks.TransclusionContainer}
        >
            <div
                className={cs('unibook-sync-block')}
                data-block-id={props.block.id}
            >
                {children}
            </div>
        </OverrideBlockDecorator>
    );
}
