import {
    AudioBlock,
    Block,
    BookmarkBlock,
    BreadcrumbBlock,
    BulletedListBlock,
    CalloutBlock,
    CodeBlock,
    ColumnBlock,
    ColumnListBlock,
    DividerBlock,
    EmbedBlock,
    EquationBlock,
    FileBlock,
    HeaderBlock,
    ImageBlock,
    NumberedListBlock,
    PageBlock,
    PageLinkBlock,
    QuoteBlock,
    SubHeaderBlock,
    SubSubHeaderBlock,
    SyncBlock,
    SyncPointerBlock,
    TableBlock,
    TableOfContentsBlock,
    TableRowBlock,
    TextBlock,
    TodoBlock,
    ToggleBlock,
    VideoBlock,
} from '@/types';

export interface BaseBlockProps<B extends Block = Block> {
    block: B;
    level: number;
    className?: string;
    children?: React.ReactNode;
}
export type PageBlockProps = BaseBlockProps<PageBlock>;
export type BookmarkBlockProps = BaseBlockProps<BookmarkBlock>;
export type TextBlockProps = BaseBlockProps<TextBlock>;
export type BulletedListBlockProps = BaseBlockProps<BulletedListBlock>;
export type NumberedListBlockProps = BaseBlockProps<NumberedListBlock>;
export type HeaderBlockProps = BaseBlockProps<HeaderBlock>;
export type SubHeaderBlockProps = BaseBlockProps<SubHeaderBlock>;
export type SubSubHeaderBlockProps = BaseBlockProps<SubSubHeaderBlock>;
export type QuoteBlockProps = BaseBlockProps<QuoteBlock>;
export type EquationBlockProps = BaseBlockProps<EquationBlock>;
export type TodoBlockProps = BaseBlockProps<TodoBlock>;
export type TableOfContentsBlockProps = BaseBlockProps<TableOfContentsBlock>;
export type DividerBlockProps = BaseBlockProps<DividerBlock>;
export type ColumnListBlockProps = BaseBlockProps<ColumnListBlock>;
export type ColumnBlockProps = BaseBlockProps<ColumnBlock>;
export type CalloutBlockProps = BaseBlockProps<CalloutBlock>;
export type ToggleBlockProps = BaseBlockProps<ToggleBlock>;
export type ImageBlockProps = BaseBlockProps<ImageBlock>;
export type EmbedBlockProps = BaseBlockProps<EmbedBlock>;
export type VideoBlockProps = BaseBlockProps<VideoBlock>;
export type AudioBlockProps = BaseBlockProps<AudioBlock>;
export type FileBlockProps = BaseBlockProps<FileBlock>;
export type CodeBlockProps = BaseBlockProps<CodeBlock>;
export type SyncBlockProps = BaseBlockProps<SyncBlock>;
export type SyncPointerBlockProps = BaseBlockProps<SyncPointerBlock>;
export type PageLinkBlockProps = BaseBlockProps<PageLinkBlock>;
export type TableBlockProps = BaseBlockProps<TableBlock>;
export type TableRowBlockProps = BaseBlockProps<TableRowBlock>;
export type BreadcrumbBlockProps = BaseBlockProps<BreadcrumbBlock>;
export type BlockProps =
    | BaseBlockProps
    | PageBlockProps
    | BookmarkBlockProps
    | TextBlockProps
    | BulletedListBlockProps
    | NumberedListBlockProps
    | HeaderBlockProps
    | SubHeaderBlockProps
    | SubSubHeaderBlockProps
    | QuoteBlockProps
    | EquationBlockProps
    | TodoBlockProps
    | TableOfContentsBlockProps
    | DividerBlockProps
    | ColumnListBlockProps
    | ColumnBlockProps
    | CalloutBlockProps
    | ToggleBlockProps
    | ImageBlockProps
    | EmbedBlockProps
    | VideoBlockProps
    | AudioBlockProps
    | FileBlockProps
    | CodeBlockProps
    | SyncBlockProps
    | SyncPointerBlockProps
    | PageLinkBlockProps
    | TableBlockProps
    | TableRowBlockProps
    | BreadcrumbBlockProps;
