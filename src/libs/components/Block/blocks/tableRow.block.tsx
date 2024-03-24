import { useRef } from 'react';

import { useRendererContext } from '@/hooks/useRendererContext';
import { cs } from '@/libs/renderer-utils';
import { TableBlock } from '@/types';

import { BlockProps } from '../BlockProps';
import { OverrideBlockDecorator } from '../OverrideBlockDecorator';

import { RichText } from './components/richText';

export function TableRowBlock(props: BlockProps) {
    const ref = useRef<HTMLTableRowElement>(null);
    const ctx = useRendererContext();
    const { page, overrideBlocks } = ctx;

    const { block, hideBlockId } = props;

    const blockId = hideBlockId ? 'notion-block' : `notion-block-${block.id}`;

    const tableBlock = page.blockMap[block.parent_id]?.value as TableBlock;
    const order = tableBlock.format?.table_block_column_order;
    const formatMap = tableBlock.format?.table_block_column_format;
    const backgroundColor = block.format?.block_color;

    if (!tableBlock || !order) {
        return null;
    }

    return (
        <OverrideBlockDecorator
            blockRef={ref}
            props={props}
            Block={overrideBlocks.TableRow}
        >
            <tr
                className={cs(
                    'notion-simple-table-row',
                    backgroundColor && `notion-${backgroundColor}`,
                    blockId
                )}
                data-block-id={props.block.id}
                ref={ref}
            >
                {order.map((column) => {
                    const color = formatMap?.[column]?.color;

                    return (
                        <td
                            key={column}
                            className={color ? `notion-${color}` : ''}
                            style={{
                                width: formatMap?.[column]?.width || 120,
                            }}
                        >
                            <div className="notion-simple-table-cell">
                                <RichText
                                    value={
                                        block.properties?.[column] || [['ㅤ']]
                                    }
                                    block={block}
                                />
                            </div>
                        </td>
                    );
                })}
            </tr>
        </OverrideBlockDecorator>
    );
}
