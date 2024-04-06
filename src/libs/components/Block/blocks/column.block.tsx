import { useRendererContext } from '@/hooks/useRendererContext';
import { cs } from '@/libs/renderer-utils';
import { ColumnBlockProps } from '@/types';

import { OverrideBlockDecorator } from '../OverrideBlockDecorator';

// column
export function ColumnBlock(props: ColumnBlockProps) {
    const ctx = useRendererContext();
    const { page, overrideBlocks } = ctx;

    const { block, children } = props;

    const spacerWidth = `min(32px, 4vw)`;
    const ratio = block.format?.column_ratio || 1;
    const parent = page.blockMap[block.parent_id]?.value;
    const columns =
        parent?.content?.length || Math.max(2, Math.ceil(1.0 / ratio));

    const width = `calc((100% - (${columns - 1} * ${spacerWidth})))`;
    const style = { width };

    return (
        <OverrideBlockDecorator Block={overrideBlocks.Column} props={props}>
            <div
                data-block-id={props.block.id}
                className={cs('unibook-column')}
                style={style}
            >
                {children}
            </div>
            <div className="unibook-spacer" />
        </OverrideBlockDecorator>
    );
}
