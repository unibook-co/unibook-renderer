import { useRef } from 'react';

import { useRendererContext } from '@/hooks/useRendererContext';
import { cs } from '@/libs/renderer-utils';
import { TableBlockProps } from '@/types';

import { OverrideBlockDecorator } from '../OverrideBlockDecorator';

export function TableBlock(props: TableBlockProps) {
    const ref = useRef<HTMLTableElement>(null);
    const { overrideBlocks } = useRendererContext();
    const { children } = props;

    return (
        <OverrideBlockDecorator props={props} Block={overrideBlocks.Table}>
            <table
                className={cs('unibook-simple-table')}
                ref={ref}
                data-block-id={props.block.id}
            >
                <tbody>{children}</tbody>
            </table>
        </OverrideBlockDecorator>
    );
}
