import { useRendererContext } from '@/hooks/useRendererContext';
import { CodeBlock as CodeBlockType, CodeBlockProps } from '@/types';

import { OverrideBlockDecorator } from '../OverrideBlockDecorator';

export function CodeBlock(props: CodeBlockProps) {
    const { components, overrideBlocks } = useRendererContext();
    const { block } = props;

    return (
        <OverrideBlockDecorator props={props} Block={overrideBlocks.Code}>
            <components.Code block={block as CodeBlockType} />
        </OverrideBlockDecorator>
    );
}
