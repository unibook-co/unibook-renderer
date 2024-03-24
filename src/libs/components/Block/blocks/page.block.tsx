import { useRendererContext } from '@/hooks/useRendererContext';
import { cs } from '@/libs/renderer-utils';

import { BlockProps } from '../BlockProps';

import { PageTitle } from './components/pageTitle';

function NotFullPageBlock(props: BlockProps) {
    const { darkMode } = useRendererContext();

    const { block, children, className, bodyClassName, hideBlockId } = props;

    const { page_small_text } = block.format || {};

    const blockId = hideBlockId ? 'notion-block' : `notion-block-${block.id}`;

    return (
        <main
            className={cs(
                'notion',
                darkMode ? 'dark-mode' : 'light-mode',
                'notion-page',
                page_small_text && 'notion-small-text',
                blockId,
                className,
                bodyClassName
            )}
        >
            <div className="notion-viewport" />
            {children}
        </main>
    );
}

function NotTopLevelPageBlock(props: BlockProps) {
    const { mapPageUrl, components } = useRendererContext();
    const { block, hideBlockId } = props;
    const blockId = hideBlockId ? 'notion-block' : `notion-block-${block.id}}`;

    const blockColor = block.format?.block_color;

    return (
        <components.PageLink
            className={cs(
                'notion-page-link',
                blockColor && `notion-${blockColor}`,
                blockId
            )}
            data-block-id={props.block.id}
            href={mapPageUrl(block.id)}
        >
            <PageTitle block={block} />
        </components.PageLink>
    );
}

export function PageBlock(props: BlockProps) {
    const { level } = props;

    if (level !== 0) {
        return <NotTopLevelPageBlock {...props} />;
    }

    return <NotFullPageBlock {...props} />;
}
