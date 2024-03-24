import { useRef } from 'react';

import { useRendererContext } from '@/hooks/useRendererContext';
import { cs } from '@/libs/renderer-utils';

import { BlockProps } from '../BlockProps';
import { OverrideBlockDecorator } from '../OverrideBlockDecorator';

import { Checkbox } from './components/checkbox';
import { RichText } from './components/richText';

export function ToDoBlock(props: BlockProps) {
    const ref = useRef<HTMLDivElement>(null);
    const ctx = useRendererContext();
    const { overrideBlocks } = ctx;

    const { block, children, hideBlockId } = props;

    const blockId = hideBlockId ? 'notion-block' : `notion-block-${block.id}`;

    const isChecked = block.properties?.checked?.[0]?.[0] === 'Yes';

    return (
        <OverrideBlockDecorator
            Block={overrideBlocks.ToDo}
            props={props}
            blockRef={ref}
        >
            <div
                className={cs('notion-to-do', blockId)}
                ref={ref}
                data-block-id={props.block.id}
            >
                <div className="notion-to-do-item">
                    <Checkbox blockId={blockId} isChecked={isChecked} />
                    <div
                        className={cs(
                            'notion-to-do-body',
                            isChecked && `notion-to-do-checked`
                        )}
                    >
                        <RichText
                            value={block.properties?.title}
                            block={block}
                        />
                    </div>
                </div>
                <div className="notion-to-do-children">{children}</div>
            </div>
        </OverrideBlockDecorator>
    );
}
