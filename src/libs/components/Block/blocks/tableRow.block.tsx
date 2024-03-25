import { useRendererContext } from '@/hooks/useRendererContext';
import { cs } from '@/libs/renderer-utils';
import { TableBlock, TableRowBlockProps } from '@/types';

import { OverrideBlockDecorator } from '../OverrideBlockDecorator';

import { RichText } from './components/richText';

export function TableRowBlock(props: TableRowBlockProps) {
    const ctx = useRendererContext();
    const { page, overrideBlocks } = ctx;

    const { block } = props;

    const tableBlock = page.blockMap[block.parent_id]?.value as TableBlock;
    const order = tableBlock.format?.table_block_column_order;
    const formatMap = tableBlock.format?.table_block_column_format;
    const backgroundColor = block.format?.block_color;

    if (!tableBlock || !order) {
        return null;
    }

    return (
        <OverrideBlockDecorator props={props} Block={overrideBlocks.TableRow}>
            <tr
                className={cs(
                    'unibook-simple-table-row',
                    backgroundColor && `unibook-${backgroundColor}`
                )}
                data-block-id={props.block.id}
            >
                {order.map((column) => {
                    const color = formatMap?.[column]?.color;

                    return (
                        <td
                            key={column}
                            className={color ? `unibook-${color}` : ''}
                            style={{
                                width: formatMap?.[column]?.width || 120,
                            }}
                        >
                            <div className="unibook-simple-table-cell">
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
