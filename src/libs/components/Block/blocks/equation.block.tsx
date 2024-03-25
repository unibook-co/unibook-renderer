import { useRendererContext } from '@/hooks/useRendererContext';
import {
    EquationBlock as EquationBlockType,
    EquationBlockProps,
} from '@/types';

import { OverrideBlockDecorator } from '../OverrideBlockDecorator';

export function EquationBlock(props: EquationBlockProps) {
    const { components, overrideBlocks } = useRendererContext();
    const { block } = props;

    return (
        <OverrideBlockDecorator props={props} Block={overrideBlocks.Equation}>
            <components.Equation
                block={block as EquationBlockType}
                inline={false}
            />
        </OverrideBlockDecorator>
    );
}
