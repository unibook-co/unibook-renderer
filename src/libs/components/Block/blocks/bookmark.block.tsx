import { useRendererContext } from '@/hooks/useRendererContext';
import { cs, getTextContent } from '@/libs/renderer-utils';
import { BookmarkBlockProps } from '@/types';

import { OverrideBlockDecorator } from '../OverrideBlockDecorator';

import { LazyImage } from './components/lazyImage';
import { RichText } from './components/richText';

export function BookmarkBlock(props: BookmarkBlockProps) {
    const ctx = useRendererContext();
    const { components, mapImageUrl, overrideBlocks } = ctx;

    const { block } = props;

    if (!block.properties) return null;

    const link = block.properties.link;
    if (!link || !link[0]?.[0]) return null;

    let title = getTextContent(block.properties.title);
    if (!title) {
        title = getTextContent(link);
    }

    if (title) {
        if (title.startsWith('http')) {
            try {
                const url = new URL(title);
                title = url.hostname;
            } catch (err) {
                // ignore invalid links
            }
        }
    }

    return (
        <OverrideBlockDecorator Block={overrideBlocks.Bookmark} props={props}>
            <div data-block-id={props.block.id} className="unibook-row">
                <components.Link
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cs(
                        'unibook-bookmark',
                        block.format?.block_color &&
                            `unibook-${block.format.block_color}`
                    )}
                    href={link[0][0]}
                >
                    <div>
                        {title && (
                            <div className="unibook-bookmark-title">
                                <RichText value={[[title]]} block={block} />
                            </div>
                        )}

                        {block.properties?.description && (
                            <div className="unibook-bookmark-description">
                                <RichText
                                    value={block.properties?.description}
                                    block={block}
                                />
                            </div>
                        )}

                        <div className="unibook-bookmark-link">
                            {block.format?.bookmark_icon && (
                                <div className="unibook-bookmark-link-icon">
                                    <LazyImage
                                        src={mapImageUrl(
                                            block.format?.bookmark_icon,
                                            block
                                        )}
                                        alt={title}
                                    />
                                </div>
                            )}

                            <div className="unibook-bookmark-link-text">
                                <RichText value={link} block={block} />
                            </div>
                        </div>
                    </div>

                    {block.format?.bookmark_cover && (
                        <div className="unibook-bookmark-image">
                            <LazyImage
                                src={mapImageUrl(
                                    block.format?.bookmark_cover,
                                    block
                                )}
                                alt={getTextContent(block.properties?.title)}
                                style={{
                                    objectFit: 'cover',
                                }}
                            />
                        </div>
                    )}
                </components.Link>
            </div>
        </OverrideBlockDecorator>
    );
}
