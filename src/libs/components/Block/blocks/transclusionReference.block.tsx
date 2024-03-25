import { useRendererContext } from '@/hooks/useRendererContext';
import { SyncPointerBlockProps } from '@/types';

import { OverrideBlockDecorator } from '../OverrideBlockDecorator';

import { SyncPointerBlock } from './components/syncPointerBlock';

export function TransclusionReferenceBlock(props: SyncPointerBlockProps) {
    const { overrideBlocks } = useRendererContext();
    const { level } = props;

    return (
        <OverrideBlockDecorator
            props={props}
            Block={overrideBlocks.TransclusionReference}
        >
            <SyncPointerBlock {...props} level={level + 1} />
        </OverrideBlockDecorator>
    );
}
