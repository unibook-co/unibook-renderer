import { useRef } from 'react';

import { useRendererContext } from '@/hooks/useRendererContext';
import { cs, getBlockParentPage } from '@/libs/renderer-utils';
import { getPageTableOfContents } from '@/libs/renderer-utils/getPageTableOfContents';
import { TableOfContentsBlockProps } from '@/types';

import { OverrideBlockDecorator } from '../OverrideBlockDecorator';

export function TableOfContentsBlock(props: TableOfContentsBlockProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { page, overrideBlocks } = useRendererContext();
    const { block } = props;

    const pageBlock = getBlockParentPage(block, page);
    if (!pageBlock) return null;

    const toc = getPageTableOfContents(pageBlock, page);
    const blockColor = block.format?.block_color;

    return (
        <OverrideBlockDecorator
            props={props}
            Block={overrideBlocks.TableOfContents}
        >
            <div
                className={cs(
                    'unibook-table-of-contents',
                    blockColor && `unibook-${blockColor}`
                )}
                data-block-id={props.block.id}
                ref={ref}
            >
                {toc.map((tocItem) => (
                    <a
                        key={tocItem.id}
                        href={`#${tocItem.id}`}
                        className="unibook-table-of-contents-item"
                    >
                        <span
                            className="unibook-table-of-contents-item-body"
                            style={{
                                display: 'inline-block',
                                marginLeft: tocItem.indentLevel * 24,
                            }}
                        >
                            {tocItem.text}
                        </span>
                    </a>
                ))}
            </div>
        </OverrideBlockDecorator>
    );
}
