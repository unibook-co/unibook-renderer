import { useRendererContext } from '@/hooks/useRendererContext';
import { BaseContentBlock, EmbedBlockProps } from '@/types';
import { cs } from '@/utils/cn';

import { OverrideBlockDecorator } from '../OverrideBlockDecorator';

import { Asset } from './components/asset';
import { RichText } from './components/richText';

// embed
export function EmbedBlock(props: EmbedBlockProps) {
    const { block, ...rest } = props;
    const { overrideBlocks } = useRendererContext();
    const value = block as BaseContentBlock;
    const { zoom } = useRendererContext();

    return (
        <OverrideBlockDecorator props={props} Block={overrideBlocks.Embed}>
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
