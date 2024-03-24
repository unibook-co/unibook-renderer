import { useRef } from 'react';

import { useRendererContext } from '@/hooks/useRendererContext';
import { EquationBlock } from '@/types';

import { BlockProps } from '../BlockProps';
import { OverrideBlockDecorator } from '../OverrideBlockDecorator';

export function EquationBlock(props: BlockProps) {
    const ref = useRef<HTMLSpanElement>(null);
    const { components, overrideBlocks } = useRendererContext();
    const { block, hideBlockId } = props;

    const blockId = hideBlockId ? 'notion-block' : `notion-block-${block.id}`;

    return (
        <OverrideBlockDecorator
            props={props}
            Block={overrideBlocks.Equation}
            blockRef={ref}
        >
            <components.Equation
                block={block as EquationBlock}
                inline={false}
                className={blockId}
                ref={ref}
            />
        </OverrideBlockDecorator>
    );
}
