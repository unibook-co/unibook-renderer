import { useRendererContext } from '@/hooks/useRendererContext';
import { BaseContentBlock, ImageBlockProps } from '@/types';
import { cs } from '@/utils/cn';

import { OverrideBlockDecorator } from '../OverrideBlockDecorator';

import { Asset } from './components/asset';
import { RichText } from './components/richText';

export function ImageBlock(props: ImageBlockProps) {
    const { block, ...rest } = props;
    const { overrideBlocks } = useRendererContext();
    const value = block as BaseContentBlock;
    const { zoom } = useRendererContext();

    return (
        <OverrideBlockDecorator props={props} Block={overrideBlocks.Image}>
            <div data-block-id={block.id}>
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
            </div>
        </OverrideBlockDecorator>
    );
}
