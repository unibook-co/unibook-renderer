import { useRef } from 'react';

import { useRendererContext } from '@/hooks/useRendererContext';
import { cs, getBlockParentPage } from '@/libs/renderer-utils';
import { getPageTableOfContents } from '@/libs/renderer-utils/getPageTableOfContents';
import { SubHeaderBlockProps } from '@/types';

import { OverrideBlockDecorator } from '../OverrideBlockDecorator';

import { RichText } from './components/richText';

const tocIndentLevelCache: {
    [blockId: string]: number;
} = {};

export function SubHeaderBlock(props: SubHeaderBlockProps) {
    const ref = useRef<HTMLHeadingElement>(null);
    const ctx = useRendererContext();
    const { page, overrideBlocks } = ctx;

    const { block } = props;

    if (!block) {
        return null;
    }

    if (!block.properties) return null;

    const blockColor = block.format?.block_color;
    const id = block.id;

    // we use a cache here because constructing the ToC is non-trivial
    let indentLevel = tocIndentLevelCache[block.id];
    let indentLevelClass: string = '';

    if (indentLevel === undefined) {
        const pageBlock = getBlockParentPage(block, page);

        if (pageBlock) {
            const toc = getPageTableOfContents(pageBlock, page);
            const tocItem = toc.find((tocItem) => tocItem.id === block.id);

            if (tocItem) {
                indentLevel = tocItem.indentLevel;
                tocIndentLevelCache[block.id] = indentLevel;
            }
        }
    }

    if (indentLevel !== undefined) {
        indentLevelClass = `unibook-h-indent-${indentLevel}`;
    }

    const classNameStr = cs(
        'unibook-h unibook-h2',
        blockColor && `unibook-${blockColor}`,
        indentLevelClass
    );

    const innerHeader = (
        <span>
            <div id={id} className="unibook-header-anchor" />
            <span className="unibook-h-title">
                <RichText value={block.properties.title} block={block} />
            </span>
        </span>
    );
    let headerBlock = null;

    headerBlock = (
        <OverrideBlockDecorator props={props} Block={overrideBlocks.SubHeader}>
            <h3
                className={classNameStr}
                data-id={id}
                ref={ref}
                data-block-id={props.block.id}
            >
                {innerHeader}
            </h3>
        </OverrideBlockDecorator>
    );

    return headerBlock;
}
