import { useRendererContext } from '@/hooks/useRendererContext';
import { Block } from '@/types';
import { OverrideBlock } from '@/types/override.type';

import { BaseBlockProps } from '../../types/blockProps.type';

export function OverrideBlockDecorator<B extends Block>({
    children,
    props: props,
    Block: Block,
}: {
    children: React.ReactNode;
    props: BaseBlockProps<B>;
    Block?: OverrideBlock<B>;
}) {
    const context = useRendererContext();
    if (!Block) {
        return <>{children}</>;
    }
    return (
        <Block blockProps={props} blockContext={context}>
            {children}
        </Block>
    );
}
