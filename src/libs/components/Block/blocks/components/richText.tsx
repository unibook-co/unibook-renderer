/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';

import { useBlocks } from '@/hooks/useBlocks';
import { useRendererContext } from '@/hooks/useRendererContext';
import { formatDate } from '@/libs/renderer-utils/formatDate';
import { parsePageId } from '@/libs/renderer-utils/parsePageId';
import { getHashFragmentValue } from '@/libs/renderer-utils/utils';
import { Block } from '@/types';
import { Decoration } from '@/types/core.type';

import { PageTitle } from './pageTitle';

export interface RichTextProps {
    value: Decoration[] | undefined;
    block: Block;
    linkProps?: any;
    linkProtocol?: string;
    inline?: boolean;
}
export const RichText = ({ value, linkProps, linkProtocol }: RichTextProps) => {
    const { mapPageUrl, components } = useRendererContext();
    const { blockMap } = useBlocks();

    if (!value) {
        return null;
    }

    return (
        <>
            {value.map(([text, decorations], index) => {
                if (!decorations) {
                    if (text === ',') {
                        return (
                            <span key={index} style={{ padding: '0.5em' }} />
                        );
                    } else {
                        return (
                            <React.Fragment key={index}>{text}</React.Fragment>
                        );
                    }
                }

                const formatted = decorations.reduce(
                    (element: React.ReactNode, decorator) => {
                        switch (decorator[0]) {
                            case 'p': {
                                // link to an internal block (within the current workspace)
                                const blockId = decorator[1];
                                const linkedBlock = blockMap[blockId]?.value;
                                if (!linkedBlock) {
                                    console.log('"p" missing block', blockId);
                                    return null;
                                }

                                // console.log('p', blockId)

                                return (
                                    <components.PageLink
                                        className="unibook-link"
                                        href={mapPageUrl(blockId)}
                                    >
                                        <PageTitle block={linkedBlock} />
                                    </components.PageLink>
                                );
                            }

                            case '‣': {
                                // link to an external block (outside of the current workspace)
                                const linkType = decorator[1][0];
                                const id = decorator[1][1];

                                const linkedBlock = blockMap[id]?.value;

                                if (!linkedBlock) {
                                    console.log(
                                        '"‣" missing block',
                                        linkType,
                                        id
                                    );
                                    return null;
                                }

                                return (
                                    <components.PageLink
                                        className="unibook-link"
                                        href={mapPageUrl(id)}
                                        {...linkProps}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <PageTitle block={linkedBlock} />
                                    </components.PageLink>
                                );
                            }

                            case 'h':
                                return (
                                    <span className={`unibook-${decorator[1]}`}>
                                        {element}
                                    </span>
                                );

                            case 'c':
                                return (
                                    <code className="unibook-inline-code">
                                        {element}
                                    </code>
                                );

                            case 'b':
                                return <b>{element}</b>;

                            case 'i':
                                return <em>{element}</em>;

                            case 's':
                                return <s>{element}</s>;

                            case '_':
                                return (
                                    <span className="unibook-inline-underscore">
                                        {element}
                                    </span>
                                );

                            case 'e':
                                return (
                                    <components.Equation
                                        math={decorator[1]}
                                        inline
                                    />
                                );

                            case 'm':
                                // comment / discussion
                                return element; //still need to return the base element

                            case 'a': {
                                const v = decorator[1];
                                const pathname = v.substring(1);
                                const id = parsePageId(pathname, {
                                    uuid: true,
                                });

                                if ((v[0] === '/' || v.includes('')) && id) {
                                    const href = v.includes('')
                                        ? v
                                        : `${mapPageUrl(id)}${getHashFragmentValue(v)}`;

                                    return (
                                        <components.PageLink
                                            className="unibook-link"
                                            href={href}
                                            {...linkProps}
                                        >
                                            {element}
                                        </components.PageLink>
                                    );
                                } else {
                                    return (
                                        <components.Link
                                            className="unibook-link"
                                            href={
                                                linkProtocol
                                                    ? `${linkProtocol}:${decorator[1]}`
                                                    : decorator[1]
                                            }
                                            {...linkProps}
                                        >
                                            {element}
                                        </components.Link>
                                    );
                                }
                            }

                            case 'd': {
                                const v = decorator[1];
                                const type = v?.type;

                                if (type === 'date') {
                                    // Example: Jul 31, 2010
                                    const startDate = v.start_date;

                                    return formatDate(startDate);
                                } else if (type === 'datetime') {
                                    // Example: Jul 31, 2010 20:00
                                    const startDate = v.start_date;
                                    const startTime = v.start_time;

                                    return `${formatDate(startDate)} ${startTime}`;
                                } else if (type === 'daterange') {
                                    // Example: Jul 31, 2010 → Jul 31, 2020
                                    const startDate = v.start_date;
                                    const endDate = v.end_date;

                                    return `${formatDate(startDate)} → ${formatDate(
                                        endDate || ''
                                    )}`;
                                } else {
                                    return element;
                                }
                            }

                            default:
                                if (process.env.NODE_ENV !== 'production') {
                                    console.log(
                                        'unsupported text format',
                                        decorator
                                    );
                                }

                                return element;
                        }
                    },
                    <>{text}</>
                );

                return <React.Fragment key={index}>{formatted}</React.Fragment>;
            })}
        </>
    );
};
