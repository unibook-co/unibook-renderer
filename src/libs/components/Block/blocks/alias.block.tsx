import { useRef } from 'react';

import { useRendererContext } from '@/hooks/useRendererContext';
import { cs } from '@/libs/renderer-utils';

import { BlockProps } from '../BlockProps';
import { OverrideBlockDecorator } from '../OverrideBlockDecorator';

import { PageTitle } from './components/pageTitle';

export function AliasBlock(props: BlockProps) {
    const ref = useRef<HTMLAnchorElement>(null);
    const ctx = useRendererContext();
    const { components, overrideBlocks, page, mapPageUrl } = ctx;
    const { block } = props;

    const blockPointerId = block?.format?.alias_pointer?.id;
    const linkedBlock = page.blockMap[blockPointerId]?.value;
    if (!linkedBlock) {
        console.log('"alias" missing block', blockPointerId);
        return null;
    }

    return (
        <OverrideBlockDecorator
            blockRef={ref}
            props={props}
            Block={overrideBlocks.Alias}
        >
            <components.PageLink
                data-block-id={props.block.id}
                className={cs('notion-page-link', blockPointerId)}
                href={mapPageUrl(blockPointerId)}
                ref={ref}
            >
                <PageTitle block={linkedBlock} />
            </components.PageLink>
        </OverrideBlockDecorator>
    );
}
