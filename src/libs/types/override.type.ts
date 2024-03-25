import { RendererContextValue } from '@/contexts';
import { BaseBlockProps } from '@/types/blockProps.type';

import {
    Block,
    EmbedBlock,
    ImageBlock,
    PageLinkBlock,
    VideoBlock,
    AudioBlock,
    BookmarkBlock,
    BulletedListBlock,
    CalloutBlock,
    CodeBlock,
    ColumnBlock,
    ColumnListBlock,
    DividerBlock,
    EquationBlock,
    FileBlock,
    HeaderBlock,
    SubHeaderBlock,
    SubSubHeaderBlock,
    NumberedListBlock,
    QuoteBlock,
    TableBlock,
    TableOfContentsBlock,
    TableRowBlock,
    TextBlock,
    TodoBlock,
    ToggleBlock,
    SyncBlock,
    SyncPointerBlock,
} from '.';

export type OverrideBlockProps<B extends Block> = {
    children: React.ReactNode;
    blockProps: BaseBlockProps<B>;
    blockContext: RendererContextValue;
};

export type OverrideBlock<B extends Block> = (
    props: OverrideBlockProps<B>
) => React.ReactNode;

export type AliasOverrideBlock = OverrideBlock<PageLinkBlock>;
export type AliasOverrideBlockProps = OverrideBlockProps<PageLinkBlock>;

export type ImageOverrideBlock = OverrideBlock<ImageBlock>;
export type ImageOverrideBlockProps = OverrideBlockProps<ImageBlock>;

export type VideoOverrideBlock = OverrideBlock<VideoBlock>;
export type VideoOverrideBlockProps = OverrideBlockProps<VideoBlock>;

export type AudioOverrideBlock = OverrideBlock<AudioBlock>;
export type AudioOverrideBlockProps = OverrideBlockProps<AudioBlock>;

export type BookmarkOverrideBlock = OverrideBlock<BookmarkBlock>;
export type BookmarkOverrideBlockProps = OverrideBlockProps<BookmarkBlock>;

export type BulletedListOverrideBlock = OverrideBlock<BulletedListBlock>;
export type BulletedListOverrideBlockProps =
    OverrideBlockProps<BulletedListBlock>;

export type CalloutOverrideBlock = OverrideBlock<CalloutBlock>;
export type CalloutOverrideBlockProps = OverrideBlockProps<CalloutBlock>;

export type CodeOverrideBlock = OverrideBlock<CodeBlock>;
export type CodeOverrideBlockProps = OverrideBlockProps<CodeBlock>;

export type ColumnOverrideBlock = OverrideBlock<ColumnBlock>;
export type ColumnOverrideBlockProps = OverrideBlockProps<ColumnBlock>;

export type ColumnListOverrideBlock = OverrideBlock<ColumnListBlock>;
export type ColumnListOverrideBlockProps = OverrideBlockProps<ColumnListBlock>;

export type DividerOverrideBlock = OverrideBlock<DividerBlock>;
export type DividerOverrideBlockProps = OverrideBlockProps<DividerBlock>;

export type EmbedOverrideBlock = OverrideBlock<EmbedBlock>;
export type EmbedOverrideBlockProps = OverrideBlockProps<EmbedBlock>;

export type EquationOverrideBlock = OverrideBlock<EquationBlock>;
export type EquationOverrideBlockProps = OverrideBlockProps<EquationBlock>;

export type FileOverrideBlock = OverrideBlock<FileBlock>;
export type FileOverrideBlockProps = OverrideBlockProps<FileBlock>;

export type HeaderOverrideBlock = OverrideBlock<HeaderBlock>;
export type HeaderOverrideBlockProps = OverrideBlockProps<HeaderBlock>;

export type SubHeaderOverrideBlock = OverrideBlock<SubHeaderBlock>;
export type SubHeaderOverrideBlockProps = OverrideBlockProps<SubHeaderBlock>;

export type SubSubHeaderOverrideBlock = OverrideBlock<SubSubHeaderBlock>;
export type SubSubHeaderOverrideBlockProps =
    OverrideBlockProps<SubSubHeaderBlock>;

export type NumberedListOverrideBlock = OverrideBlock<NumberedListBlock>;
export type NumberedListOverrideBlockProps =
    OverrideBlockProps<NumberedListBlock>;

// PageBlock Skip

export type QuoteOverrideBlock = OverrideBlock<QuoteBlock>;
export type QuoteOverrideBlockProps = OverrideBlockProps<QuoteBlock>;

export type TableOverrideBlock = OverrideBlock<TableBlock>;
export type TableOverrideBlockProps = OverrideBlockProps<TableBlock>;

export type TableOfContentsOverrideBlock = OverrideBlock<TableOfContentsBlock>;
export type TableOfContentsOverrideBlockProps =
    OverrideBlockProps<TableOfContentsBlock>;

export type TableRowOverrideBlock = OverrideBlock<TableRowBlock>;
export type TableRowOverrideBlockProps = OverrideBlockProps<TableRowBlock>;

export type TextOverrideBlock = OverrideBlock<TextBlock>;
export type TextOverrideBlockProps = OverrideBlockProps<TextBlock>;

export type TodoOverrideBlock = OverrideBlock<TodoBlock>;
export type TodoOverrideBlockProps = OverrideBlockProps<TodoBlock>;

export type ToggleOverrideBlock = OverrideBlock<ToggleBlock>;
export type ToggleOverrideBlockProps = OverrideBlockProps<ToggleBlock>;

export type TransclusionContainerOverrideBlock = OverrideBlock<SyncBlock>;
export type TransclusionContainerOverrideBlockProps =
    OverrideBlockProps<SyncBlock>;

export type TransclusionReferenceOverrideBlock =
    OverrideBlock<SyncPointerBlock>;
export type TransclusionReferenceOverrideBlockProps =
    OverrideBlockProps<SyncPointerBlock>;

export type InjectionOverrideBlock = OverrideBlock<CodeBlock>;
export type InjectionOverrideBlockProps = OverrideBlockProps<CodeBlock>;

export type OverrideBlocks = {
    Alias?: AliasOverrideBlock;
    Image?: ImageOverrideBlock;
    Video?: VideoOverrideBlock;
    Audio?: AudioOverrideBlock;
    Bookmark?: BookmarkOverrideBlock;
    BulletedList?: BulletedListOverrideBlock;
    Callout?: CalloutOverrideBlock;
    Code?: CodeOverrideBlock;
    Column?: ColumnOverrideBlock;
    ColumnList?: ColumnListOverrideBlock;
    Divider?: DividerOverrideBlock;
    Embed?: EmbedOverrideBlock;
    Equation?: EquationOverrideBlock;
    File?: FileOverrideBlock;
    Header?: HeaderOverrideBlock;
    SubHeader?: SubHeaderOverrideBlock;
    SubSubHeader?: SubSubHeaderOverrideBlock;
    NumberedList?: NumberedListOverrideBlock;
    Quote?: QuoteOverrideBlock;
    Table?: TableOverrideBlock;
    TableOfContents?: TableOfContentsOverrideBlock;
    TableRow?: TableRowOverrideBlock;
    Text?: TextOverrideBlock;
    ToDo?: TodoOverrideBlock;
    Toggle?: ToggleOverrideBlock;
    TransclusionContainer?: TransclusionContainerOverrideBlock;
    TransclusionReference?: TransclusionReferenceOverrideBlock;
    Injection?: InjectionOverrideBlock;
};
