import { useRendererContext } from '@/hooks/useRendererContext';
import { cs } from '@/libs/renderer-utils';
import { ToggleBlockProps } from '@/types';

import { OverrideBlockDecorator } from '../OverrideBlockDecorator';

import { RichText } from './components/richText';

export function ToggleBlock(props: ToggleBlockProps) {
    const { overrideBlocks } = useRendererContext();
    const { block, children } = props;

    return (
        <OverrideBlockDecorator props={props} Block={overrideBlocks.Toggle}>
            <details
                className={cs('unibook-toggle')}
                data-block-id={props.block.id}
            >
                <summary>
                    <RichText value={block.properties?.title} block={block} />
                </summary>
                <div>{children}</div>
            </details>
        </OverrideBlockDecorator>
    );
}
