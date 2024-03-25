import { useRendererContext } from '@/hooks/useRendererContext';
import { CodeBlockProps } from '@/types';

import { OverrideBlockDecorator } from '../OverrideBlockDecorator';

export function InjectionBlock(props: CodeBlockProps) {
    const { overrideBlocks } = useRendererContext();

    const content = props?.block?.properties?.title
        .map((title) => title[0])
        .join('');

    return (
        <OverrideBlockDecorator props={props} Block={overrideBlocks.Injection}>
            <div
                className="unibook-injection px-[3px] py-[2px] mx-[1px]"
                data-block-id={props.block.id}
                dangerouslySetInnerHTML={{
                    __html: content,
                }}
            />
        </OverrideBlockDecorator>
    );
}
