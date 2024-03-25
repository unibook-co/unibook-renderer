import { useRendererContext } from '@/hooks/useRendererContext';
import { cs } from '@/libs/renderer-utils';
import { TextBlockProps } from '@/types';

import { OverrideBlockDecorator } from '../OverrideBlockDecorator';

import { RichText } from './components/richText';

export function TextBlock(props: TextBlockProps) {
    const { block, children } = props;
    const { overrideBlocks } = useRendererContext();

    if (!block.properties && !block.content?.length) {
        return <div className={cs('unibook-blank')}>&nbsp;</div>;
    }

    const blockColor = block.format?.block_color;

    return (
        <OverrideBlockDecorator Block={overrideBlocks.Text} props={props}>
            <div
                className={cs(
                    'unibook-text',
                    blockColor && `unibook-${blockColor}`
                )}
                data-block-id={props.block.id}
            >
                {block.properties?.title && (
                    <RichText value={block.properties.title} block={block} />
                )}

                {children && (
                    <div className="unibook-text-children">{children}</div>
                )}
            </div>
        </OverrideBlockDecorator>
    );
}
