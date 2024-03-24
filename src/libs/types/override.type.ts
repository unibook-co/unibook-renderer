import { BlockProps } from '@/components/Block/BlockProps';
import { RendererContextValue } from '@/contexts';

export type OverrideBlockProps<
    element extends HTMLElement | undefined = HTMLDivElement,
> = {
    children: React.ReactNode;
    blockProps: BlockProps;
    blockRef: element extends HTMLElement
        ? React.RefObject<element>
        : undefined;
    blockContext: RendererContextValue;
};

export type OverrideBlock<
    element extends HTMLElement | undefined = HTMLDivElement,
> = (props: OverrideBlockProps<element>) => React.ReactNode;

export type AliasOverrideBlock = OverrideBlock<HTMLAnchorElement>;
export type AliasOverrideBlockProps = OverrideBlockProps<HTMLAnchorElement>;

export type AssetOverrideBlock = OverrideBlock<HTMLDivElement>;
export type AssetOverrideBlockProps = OverrideBlockProps<HTMLDivElement>;

export type AudioOverrideBlock = OverrideBlock<HTMLDivElement>;
export type AudioOverrideBlockProps = OverrideBlockProps<HTMLDivElement>;

export type BookmarkOverrideBlock = OverrideBlock<HTMLDivElement>;
export type BookmarkOverrideBlockProps = OverrideBlockProps<HTMLDivElement>;

export type BulletedListOverrideBlock = OverrideBlock<HTMLLIElement>;
export type BulletedListOverrideBlockProps = OverrideBlockProps<HTMLLIElement>;

export type CalloutOverrideBlock = OverrideBlock<HTMLDivElement>;
export type CalloutOverrideBlockProps = OverrideBlockProps<HTMLDivElement>;

export type CodeOverrideBlock = OverrideBlock<HTMLDivElement>;
export type CodeOverrideBlockProps = OverrideBlockProps<HTMLDivElement>;

export type ColumnOverrideBlock = OverrideBlock<HTMLDivElement>;
export type ColumnOverrideBlockProps = OverrideBlockProps<HTMLDivElement>;

export type ColumnListOverrideBlock = OverrideBlock<HTMLDivElement>;
export type ColumnListOverrideBlockProps = OverrideBlockProps<HTMLDivElement>;

export type DividerOverrideBlock = OverrideBlock<HTMLHRElement>;
export type DividerOverrideBlockProps = OverrideBlockProps<HTMLHRElement>;

export type DriveOverrideBlock = OverrideBlock<HTMLDivElement>;
export type DriveOverrideBlockProps = OverrideBlockProps<HTMLDivElement>;

export type EmbedOverrideBlock = OverrideBlock<HTMLDivElement>;
export type EmbedOverrideBlockProps = OverrideBlockProps<HTMLDivElement>;

export type EOIOverrideBlock = OverrideBlock<HTMLAnchorElement>;
export type EOIOverrideBlockProps = OverrideBlockProps<HTMLAnchorElement>;

export type EquationOverrideBlock = OverrideBlock<HTMLSpanElement>;
export type EquationOverrideBlockProps = OverrideBlockProps<HTMLSpanElement>;

export type FileOverrideBlock = OverrideBlock<HTMLDivElement>;
export type FileOverrideBlockProps = OverrideBlockProps<HTMLDivElement>;

export type HeaderOverrideBlock = OverrideBlock<HTMLHeadingElement>;
export type HeaderOverrideBlockProps = OverrideBlockProps<HTMLHeadingElement>;

export type SubHeaderOverrideBlock = OverrideBlock<HTMLHeadingElement>;
export type SubHeaderOverrideBlockProps =
    OverrideBlockProps<HTMLHeadingElement>;

export type SubSubHeaderOverrideBlock = OverrideBlock<HTMLHeadingElement>;
export type SubSubHeaderOverrideBlockProps =
    OverrideBlockProps<HTMLHeadingElement>;

export type NumberedListOverrideBlock = OverrideBlock<HTMLLIElement>;
export type NumberedListOverrideBlockProps = OverrideBlockProps<HTMLLIElement>;

// PageBlock Skip

export type QuoteOverrideBlock = OverrideBlock<HTMLQuoteElement>;
export type QuoteOverrideBlockProps = OverrideBlockProps<HTMLQuoteElement>;

export type TableOverrideBlock = OverrideBlock<HTMLTableElement>;
export type TableOverrideBlockProps = OverrideBlockProps<HTMLTableElement>;

export type TableOfContentsOverrideBlock = OverrideBlock<HTMLDivElement>;
export type TableOfContentsOverrideBlockProps =
    OverrideBlockProps<HTMLDivElement>;

export type TableRowOverrideBlock = OverrideBlock<HTMLTableRowElement>;
export type TableRowOverrideBlockProps =
    OverrideBlockProps<HTMLTableRowElement>;

export type TextOverrideBlock = OverrideBlock<HTMLDivElement>;
export type TextOverrideBlockProps = OverrideBlockProps<HTMLDivElement>;

export type TodoOverrideBlock = OverrideBlock<HTMLDivElement>;
export type TodoOverrideBlockProps = OverrideBlockProps<HTMLDivElement>;

export type ToggleOverrideBlock = OverrideBlock<HTMLDetailsElement>;
export type ToggleOverrideBlockProps = OverrideBlockProps<HTMLDetailsElement>;

export type TransclusionContainerOverrideBlock = OverrideBlock<HTMLDivElement>;
export type TransclusionContainerOverrideBlockProps =
    OverrideBlockProps<HTMLDivElement>;

export type TransclusionReferenceOverrideBlock = OverrideBlock<undefined>;
export type TransclusionReferenceOverrideBlockProps =
    OverrideBlockProps<undefined>;

export type InjectionOverrideBlock = OverrideBlock<HTMLDivElement>;
export type InjectionOverrideBlockProps = OverrideBlockProps<HTMLDivElement>;

export type OverrideBlocks = {
    Alias?: AliasOverrideBlock;
    Asset?: AssetOverrideBlock;
    Audio?: AudioOverrideBlock;
    Bookmark?: BookmarkOverrideBlock;
    BulletedList?: BulletedListOverrideBlock;
    Callout?: CalloutOverrideBlock;
    Code?: CodeOverrideBlock;
    Column?: ColumnOverrideBlock;
    ColumnList?: ColumnListOverrideBlock;
    Divider?: DividerOverrideBlock;
    Drive?: DriveOverrideBlock;
    Embed?: EmbedOverrideBlock;
    EOI?: EOIOverrideBlock;
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
