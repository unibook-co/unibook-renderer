import { useRendererContext } from '@/hooks/useRendererContext';
import { NumberedListBlockProps } from '@/types';
import { cs } from '@/utils/cn';
import { getListNumber } from '@/utils/getListNumber';

import { OverrideBlockDecorator } from '../OverrideBlockDecorator';

import { RichText } from './components/richText';

export function NumberedListBlock(props: NumberedListBlockProps) {
    const ctx = useRendererContext();
    const { page, overrideBlocks } = ctx;

    const { block, children } = props;

    const wrapList = (content: React.ReactNode, start?: number) => (
        <ol
            start={start}
            className={cs('unibook-list', 'unibook-list-numbered')}
        >
            {content}
        </ol>
    );

    let output: JSX.Element | null = null;

    if (block.content) {
        output = (
            <>
                {block.properties && (
                    <OverrideBlockDecorator
                        props={props}
                        Block={overrideBlocks.NumberedList}
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
                Block={overrideBlocks.NumberedList}
            >
                <li>
                    <RichText value={block.properties.title} block={block} />
                </li>
            </OverrideBlockDecorator>
        ) : null;
    }

    const isTopLevel =
        block.type !== page.blockMap[block.parent_id]?.value?.type;
    const start = getListNumber(block.id, page.blockMap);

    return isTopLevel ? wrapList(output, start) : output;
}
