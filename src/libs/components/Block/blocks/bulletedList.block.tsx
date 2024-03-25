import { useRendererContext } from '@/hooks/useRendererContext';
import { cs } from '@/libs/renderer-utils';
import { BulletedListBlockProps } from '@/types';

import { OverrideBlockDecorator } from '../OverrideBlockDecorator';

import { RichText } from './components/richText';

// bulleted_list
export function BulletedListBlock(props: BulletedListBlockProps) {
    const ctx = useRendererContext();
    const { page, overrideBlocks } = ctx;

    const { block, children } = props;

    const wrapList = (content: React.ReactNode) => (
        <ul className={cs('unibook-list', 'unibook-list-disc')}>{content}</ul>
    );

    let output: JSX.Element | null = null;

    if (block.content) {
        output = (
            <>
                {block.properties && (
                    <OverrideBlockDecorator
                        props={props}
                        Block={overrideBlocks.BulletedList}
                    >
                        <li>
                            <RichText
                                value={block.properties.title}
                                block={block}
                            />
                        </li>
                    </OverrideBlockDecorator>
                )}
                {wrapList(children)}
            </>
        );
    } else {
        output = block.properties ? (
            <OverrideBlockDecorator
                props={props}
                Block={overrideBlocks.BulletedList}
            >
                <li data-block-id={props.block.id}>
                    <RichText value={block.properties.title} block={block} />
                </li>
            </OverrideBlockDecorator>
        ) : null;
    }

    const isTopLevel =
        block.type !== page.blockMap[block.parent_id]?.value?.type;

    return isTopLevel ? wrapList(output) : output;
}
