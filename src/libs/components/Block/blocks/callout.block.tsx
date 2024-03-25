import { useRendererContext } from '@/hooks/useRendererContext';
import { cs } from '@/libs/renderer-utils';
import { CalloutBlockProps } from '@/types';

import { OverrideBlockDecorator } from '../OverrideBlockDecorator';

import { PageIcon } from './components/pageIcon';
import { RichText } from './components/richText';

export function CalloutBlock(props: CalloutBlockProps) {
    const { overrideBlocks } = useRendererContext();

    const { block, children } = props;

    return (
        <OverrideBlockDecorator Block={overrideBlocks.Callout} props={props}>
            <div
                className={cs(
                    'unibook-callout',
                    block.format?.block_color &&
                        `unibook-${block.format?.block_color}_co`
                )}
                data-block-id={props.block.id}
            >
                <PageIcon block={block} />

                <div className="unibook-callout-text">
                    <RichText value={block.properties?.title} block={block} />
                    {children}
                </div>
            </div>
        </OverrideBlockDecorator>
    );
}
