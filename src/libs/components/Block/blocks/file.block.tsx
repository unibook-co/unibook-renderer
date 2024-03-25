import { FileIcon } from '@/components/icons/FileIcon';
import { useRendererContext } from '@/hooks/useRendererContext';
import { cs } from '@/libs/renderer-utils';
import { FileBlockProps } from '@/types';

import { OverrideBlockDecorator } from '../OverrideBlockDecorator';

import { RichText } from './components/richText';

export function FileBlock(props: FileBlockProps) {
    const { block } = props;
    const { components, page, overrideBlocks } = useRendererContext();

    const source =
        page.signed_urls[block.id] || block.properties?.source?.[0]?.[0];

    return (
        <OverrideBlockDecorator props={props} Block={overrideBlocks.File}>
            <div className={cs('unibook-file')} data-block-id={props.block.id}>
                <components.Link
                    className="unibook-file-link"
                    href={source}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <FileIcon className="unibook-file-icon" />

                    <div className="unibook-file-info">
                        <div className="unibook-file-title">
                            <RichText
                                value={block.properties?.title || [['File']]}
                                block={block}
                            />
                        </div>

                        {block.properties?.size && (
                            <div className="unibook-file-size">
                                <RichText
                                    value={block.properties.size}
                                    block={block}
                                />
                            </div>
                        )}
                    </div>
                </components.Link>
            </div>
        </OverrideBlockDecorator>
    );
}
