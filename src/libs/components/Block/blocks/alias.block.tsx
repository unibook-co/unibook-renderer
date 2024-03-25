import { useRendererContext } from '@/hooks/useRendererContext';
import { cs } from '@/libs/renderer-utils';
import { PageLinkBlockProps } from '@/types';

import { OverrideBlockDecorator } from '../OverrideBlockDecorator';

import { PageTitle } from './components/pageTitle';

export function AliasBlock(props: PageLinkBlockProps) {
    const { components, overrideBlocks, page, mapPageUrl } =
        useRendererContext();
    const { block } = props;

    const blockPointerId = block?.format?.alias_pointer?.id;
    const linkedBlock = page.blockMap[blockPointerId]?.value;
    if (!linkedBlock) {
        console.log('"alias" missing block', blockPointerId);
        return null;
    }

    return (
        <OverrideBlockDecorator props={props} Block={overrideBlocks.Alias}>
            <components.PageLink
                className={cs('unibook-page-link')}
                href={mapPageUrl(blockPointerId)}
            >
                <PageTitle block={linkedBlock} />
            </components.PageLink>
        </OverrideBlockDecorator>
    );
}
