import { useRendererContext } from '@/hooks/useRendererContext';
import { cs } from '@/libs/renderer-utils';
import { DividerBlockProps } from '@/types';

import { OverrideBlockDecorator } from '../OverrideBlockDecorator';

// divider
export function DividerBlock(props: DividerBlockProps) {
    const { overrideBlocks } = useRendererContext();

    return (
        <OverrideBlockDecorator props={props} Block={overrideBlocks.Divider}>
            <hr data-block-id={props.block.id} className={cs('unibook-hr')} />
        </OverrideBlockDecorator>
    );
}
