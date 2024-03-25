import { useRendererContext } from '@/hooks/useRendererContext';
import { cs } from '@/libs/renderer-utils';
import { ColumnListBlockProps } from '@/types';

import { OverrideBlockDecorator } from '../OverrideBlockDecorator';

export function ColumnListBlock(props: ColumnListBlockProps) {
    const { children } = props;
    const { overrideBlocks } = useRendererContext();

    return (
        <OverrideBlockDecorator props={props} Block={overrideBlocks.ColumnList}>
            <div data-block-id={props.block.id} className={cs('unibook-row')}>
                {children}
            </div>
        </OverrideBlockDecorator>
    );
}
