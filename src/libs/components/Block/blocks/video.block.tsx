import { useRendererContext } from '@/hooks/useRendererContext';
import { BaseContentBlock, VideoBlockProps } from '@/types';
import { cs } from '@/utils/cn';

import { OverrideBlockDecorator } from '../OverrideBlockDecorator';

import { Asset } from './components/asset';
import { RichText } from './components/richText';

export function VideoBlock(props: VideoBlockProps) {
    const { block, ...rest } = props;
    const { overrideBlocks } = useRendererContext();
    const value = block as BaseContentBlock;
    const { zoom } = useRendererContext();

    return (
        <OverrideBlockDecorator props={props} Block={overrideBlocks.Video}>
            <figure
                className={cs(
                    'unibook-asset-wrapper',
                    `unibook-asset-wrapper-${block.type}`
                )}
                data-block-id={props.block.id}
                {...rest}
            >
                <Asset block={value} zoomAble={zoom}>
                    {value?.properties?.caption && (
                        <figcaption className="unibook-asset-caption">
                            <RichText
                                value={value.properties.caption}
                                block={block}
                            />
                        </figcaption>
                    )}
                </Asset>
            </figure>
        </OverrideBlockDecorator>
    );
}
