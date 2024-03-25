import { useRendererContext } from '@/hooks/useRendererContext';
import { cs } from '@/libs/renderer-utils';
import { TodoBlockProps } from '@/types';

import { OverrideBlockDecorator } from '../OverrideBlockDecorator';

import { Checkbox } from './components/checkbox';
import { RichText } from './components/richText';

export function ToDoBlock(props: TodoBlockProps) {
    const ctx = useRendererContext();
    const { overrideBlocks } = ctx;
    const { block, children } = props;

    const isChecked = block.properties?.checked?.[0]?.[0] === 'Yes';

    return (
        <OverrideBlockDecorator Block={overrideBlocks.ToDo} props={props}>
            <div className={cs('unibook-to-do')} data-block-id={props.block.id}>
                <div className="unibook-to-do-item">
                    <Checkbox isChecked={isChecked} />
                    <div
                        className={cs(
                            'unibook-to-do-body',
                            isChecked && `unibook-to-do-checked`
                        )}
                    >
                        <RichText
                            value={block.properties?.title}
                            block={block}
                        />
                    </div>
                </div>
                <div className="unibook-to-do-children">{children}</div>
            </div>
        </OverrideBlockDecorator>
    );
}
