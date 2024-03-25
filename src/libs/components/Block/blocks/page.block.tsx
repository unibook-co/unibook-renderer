import { useRendererContext } from '@/hooks/useRendererContext';
import { cs } from '@/libs/renderer-utils';
import { PageBlockProps } from '@/types';

import { PageTitle } from './components/pageTitle';

function NotFullPageBlock(props: PageBlockProps) {
    const { darkMode } = useRendererContext();

    const { block, children, className } = props;

    const { page_small_text } = block.format || {};

    return (
        <main
            className={cs(
                'unibook',
                darkMode ? 'dark-mode' : 'light-mode',
                'unibook-page',
                page_small_text && 'unibook-small-text',
                className
            )}
        >
            <div className="unibook-viewport" />
            {children}
        </main>
    );
}

function NotTopLevelPageBlock(props: PageBlockProps) {
    const { mapPageUrl, components } = useRendererContext();
    const { block } = props;

    const blockColor = block.format?.block_color;

    return (
        <components.PageLink
            className={cs(
                'unibook-page-link',
                blockColor && `unibook-${blockColor}`
            )}
            data-block-id={props.block.id}
            href={mapPageUrl(block.id)}
        >
            <PageTitle block={block} />
        </components.PageLink>
    );
}

export function PageBlock(props: PageBlockProps) {
    const { level } = props;

    if (level !== 0) {
        return <NotTopLevelPageBlock {...props} />;
    }

    return <NotFullPageBlock {...props} />;
}
