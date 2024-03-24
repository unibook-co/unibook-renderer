import { useRef } from 'react';

import { useRendererContext } from '@/hooks/useRendererContext';
import { CodeBlock } from '@/types';

import { BlockProps } from '../BlockProps';
import { OverrideBlockDecorator } from '../OverrideBlockDecorator';

export function CodeBlock(props: BlockProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { components, overrideBlocks } = useRendererContext();
    const { block } = props;

    return (
        <OverrideBlockDecorator
            blockRef={ref}
            props={props}
            Block={overrideBlocks.Code}
        >
            <components.Code block={block as CodeBlock} ref={ref} />
        </OverrideBlockDecorator>
    );
}
