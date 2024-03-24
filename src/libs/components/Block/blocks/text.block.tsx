import { useRef } from 'react';

import { useRendererContext } from '@/hooks/useRendererContext';
import { cs } from '@/libs/renderer-utils';

import { BlockProps } from '../BlockProps';
import { OverrideBlockDecorator } from '../OverrideBlockDecorator';

import { RichText } from './components/richText';

export function TextBlock(props: BlockProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { block, children, hideBlockId } = props;
    const { overrideBlocks } = useRendererContext();

    const blockId = hideBlockId ? 'notion-block' : `notion-block-${block.id}`;

    if (!block.properties && !block.content?.length) {
        return <div className={cs('notion-blank', blockId)}>&nbsp;</div>;
    }

    const blockColor = block.format?.block_color;

    return (
        <OverrideBlockDecorator
            Block={overrideBlocks.Text}
            props={props}
            blockRef={ref}
        >
            <div
                className={cs(
                    'notion-text',
                    blockColor && `notion-${blockColor}`,
                    blockId
                )}
                data-block-id={props.block.id}
                ref={ref}
            >
                {block.properties?.title && (
                    <RichText value={block.properties.title} block={block} />
                )}

                {children && (
                    <div className="notion-text-children">{children}</div>
                )}
            </div>
        </OverrideBlockDecorator>
    );
}
