/* eslint-disable @typescript-eslint/no-explicit-any */

import {
    AudioBlockProps,
    BlockProps,
    BookmarkBlockProps,
    BulletedListBlockProps,
    CalloutBlockProps,
    CodeBlockProps,
    ColumnBlockProps,
    ColumnListBlockProps,
    DividerBlockProps,
    EmbedBlockProps,
    EquationBlockProps,
    FileBlockProps,
    HeaderBlockProps,
    ImageBlockProps,
    NumberedListBlockProps,
    PageBlockProps,
    PageLinkBlockProps,
    QuoteBlockProps,
    SubHeaderBlockProps,
    SubSubHeaderBlockProps,
    SyncBlockProps,
    SyncPointerBlockProps,
    TableBlockProps,
    TableOfContentsBlockProps,
    TableRowBlockProps,
    TextBlockProps,
    TodoBlockProps,
    ToggleBlockProps,
    VideoBlockProps,
} from '@/types';

import { AliasBlock } from './blocks/alias.block';
import { AudioBlock } from './blocks/audio.block';
import { BookmarkBlock } from './blocks/bookmark.block';
import { BulletedListBlock } from './blocks/bulletedList.block';
import { CalloutBlock } from './blocks/callout.block';
import { CodeBlock } from './blocks/code.block';
import { ColumnBlock } from './blocks/column.block';
import { ColumnListBlock } from './blocks/columnList.block';
import { DividerBlock } from './blocks/divider.block';
import { EmbedBlock } from './blocks/embed.block';
import { EquationBlock } from './blocks/equation.block';
import { FileBlock } from './blocks/file.block';
import { HeaderBlock } from './blocks/header.block';
import { ImageBlock } from './blocks/image.block';
import { InjectionBlock } from './blocks/injection.block';
import { NumberedListBlock } from './blocks/numberedList.block';
import { PageBlock } from './blocks/page.block';
import { QuoteBlock } from './blocks/quote.block';
import { SubHeaderBlock } from './blocks/subHeader.block';
import { SubSubHeaderBlock } from './blocks/subSubHeader.block';
import { TableBlock } from './blocks/table.block';
import { TableOfContentsBlock } from './blocks/tableOfContents.block';
import { TableRowBlock } from './blocks/tableRow.block';
import { TextBlock } from './blocks/text.block';
import { ToDoBlock } from './blocks/toDo.block';
import { ToggleBlock } from './blocks/toggle.block';
import { TransclusionContainerBlock } from './blocks/transclusionContainer.block';
import { TransclusionReferenceBlock } from './blocks/transclusionReference.block';
import { VideoBlock } from './blocks/video.block';

export const Block = (props: BlockProps) => {
    const { block } = props;
    if (!block) {
        return null;
    }

    switch (block.type) {
        case 'page':
            return <PageBlock {...(props as PageBlockProps)} />;

        case 'header':
            return <HeaderBlock {...(props as HeaderBlockProps)} />;

        case 'sub_header':
            return <SubHeaderBlock {...(props as SubHeaderBlockProps)} />;

        case 'sub_sub_header':
            return <SubSubHeaderBlock {...(props as SubSubHeaderBlockProps)} />;

        case 'divider':
            return <DividerBlock {...(props as DividerBlockProps)} />;

        case 'text': {
            return <TextBlock {...(props as TextBlockProps)} />;
        }

        case 'bulleted_list':
            return <BulletedListBlock {...(props as BulletedListBlockProps)} />;

        case 'numbered_list': {
            return <NumberedListBlock {...(props as NumberedListBlockProps)} />;
        }

        case 'embed':
            return <EmbedBlock {...(props as EmbedBlockProps)} />;

        case 'image':
            return <ImageBlock {...(props as ImageBlockProps)} />;
        case 'video':
            return <VideoBlock {...(props as VideoBlockProps)} />;

        case 'audio':
            return <AudioBlock {...(props as AudioBlockProps)} />;

        case 'file':
            return <FileBlock {...(props as FileBlockProps)} />;

        case 'equation':
            return <EquationBlock {...(props as EquationBlockProps)} />;

        case 'code':
            if (
                props?.block?.properties?.caption?.[0]?.[0] === 'html:injection'
            ) {
                return <InjectionBlock {...(props as CodeBlockProps)} />;
            }

            return <CodeBlock {...(props as CodeBlockProps)} />;

        case 'column_list':
            return <ColumnListBlock {...(props as ColumnListBlockProps)} />;

        case 'column':
            return <ColumnBlock {...(props as ColumnBlockProps)} />;

        case 'quote': {
            return <QuoteBlock {...(props as QuoteBlockProps)} />;
        }

        case 'callout':
            return <CalloutBlock {...(props as CalloutBlockProps)} />;

        case 'bookmark':
            return <BookmarkBlock {...(props as BookmarkBlockProps)} />;

        case 'toggle':
            return <ToggleBlock {...(props as ToggleBlockProps)} />;

        case 'table_of_contents':
            return (
                <TableOfContentsBlock
                    {...(props as TableOfContentsBlockProps)}
                />
            );

        case 'to_do':
            return <ToDoBlock {...(props as TodoBlockProps)} />;

        case 'transclusion_container':
            return (
                <TransclusionContainerBlock {...(props as SyncBlockProps)} />
            );

        case 'transclusion_reference':
            return (
                <TransclusionReferenceBlock
                    {...(props as SyncPointerBlockProps)}
                />
            );

        case 'alias':
            return <AliasBlock {...(props as PageLinkBlockProps)} />;

        case 'table':
            return <TableBlock {...(props as TableBlockProps)} />;

        case 'table_row':
            return <TableRowBlock {...(props as TableRowBlockProps)} />;

        default:
            if (process.env.NODE_ENV !== 'production') {
                console.log(
                    'Unsupported type ' + (block as any).type,
                    JSON.stringify(block, null, 2)
                );
            }
            return <div />;
    }
};
