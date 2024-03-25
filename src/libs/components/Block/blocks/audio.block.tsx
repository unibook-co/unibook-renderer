import { useRendererContext } from '@/hooks/useRendererContext';
import { cs } from '@/libs/renderer-utils';
import { AudioBlockProps } from '@/types';

import { OverrideBlockDecorator } from '../OverrideBlockDecorator';

export function AudioBlock(props: AudioBlockProps) {
    const { block } = props;
    const { page, overrideBlocks } = useRendererContext();

    const source =
        page.signed_urls[block.id] || block.properties?.source?.[0]?.[0];

    return (
        <OverrideBlockDecorator props={props} Block={overrideBlocks.Audio}>
            <div className={cs('unibook-audio')} data-block-id={props.block.id}>
                <audio controls preload="none" src={source} />
            </div>
        </OverrideBlockDecorator>
    );
}
