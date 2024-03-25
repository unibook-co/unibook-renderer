import { useRef } from 'react';

import { useRendererContext } from '@/hooks/useRendererContext';
import { cs } from '@/libs/renderer-utils';
import { QuoteBlockProps } from '@/types';

import { OverrideBlockDecorator } from '../OverrideBlockDecorator';

import { RichText } from './components/richText';

export function QuoteBlock(props: QuoteBlockProps) {
    const ref = useRef<HTMLQuoteElement>(null);
    const { block, children } = props;
    const { overrideBlocks } = useRendererContext();

    if (!block.properties) return null;

    const blockColor = block.format?.block_color;

    return (
        <OverrideBlockDecorator props={props} Block={overrideBlocks.Quote}>
            <blockquote
                className={cs(
                    'unibook-quote',
                    blockColor && `unibook-${blockColor}`
                )}
                ref={ref}
                data-block-id={props.block.id}
            >
                <div>
                    <RichText value={block.properties.title} block={block} />
                </div>
                {children}
            </blockquote>
        </OverrideBlockDecorator>
    );
}
