/* eslint-disable @typescript-eslint/no-explicit-any */

import { ID, Color, Decoration, Role } from ".";

export type BlockType =
  | "page"
  | "text"
  | "bookmark"
  | "bulleted_list"
  | "numbered_list"
  | "header"
  | "sub_header"
  | "sub_sub_header"
  | "quote"
  | "equation"
  | "to_do"
  | "table_of_contents"
  | "divider"
  | "column_list"
  | "column"
  | "callout"
  | "toggle"
  | "image"
  | "embed"
  | "video"
  | "pdf"
  | "audio"
  | "file"
  | "code"
  | "transclusion_container"
  | "transclusion_reference"
  | "alias"
  | "table"
  | "table_row"
  | "breadcrumb";

export type Block = BaseBlock;

export interface BaseBlock {
  id: ID;
  type: BlockType;
  properties?: any;
  format?: any;
  content?: ID[];
  space_id?: ID;
  parent_id: ID;
  parent_table: string | "space" | "block" | "table";
  version: number;
  created_time: number;
  last_edited_time: number;
  alive: boolean;
  created_by_table: string;
  created_by_id: ID;
  last_edited_by_table: string;
  last_edited_by_id: ID;
}

export interface BaseTextBlock extends BaseBlock {
  content?: ID[];
  properties?: {
    title: Decoration[];
  };
  format?: {
    block_color: Color;
  };
}
export interface BaseContentBlock extends BaseBlock {
  properties: {
    source: string[][];
    caption?: Decoration[];
  };
  format?: {
    block_alignment: "center" | "left" | "right";
    block_width: number;
    block_height: number;
    display_source: string;
    block_full_width: boolean;
    block_page_width: boolean;
    block_aspect_ratio: number;
    block_preserve_scale: boolean;
  };
  file_ids?: string[];
}
export interface BasePageBlock extends BaseBlock {
  properties?: {
    title: Decoration[];
  };
  format: {
    page_full_width?: boolean;
    page_small_text?: boolean;
    page_cover_position?: number;
    block_locked?: boolean;
    block_locked_by?: string;
    page_cover?: string;
    page_icon?: string;
    block_color?: Color;
  };
  permissions: {
    role: Role;
    type: string;
  }[];
  file_ids?: string[];
}
export interface PageBlock extends BasePageBlock {
  type: "page";
}
export interface BookmarkBlock extends BaseBlock {
  type: "bookmark";
  properties: {
    link: Decoration[];
    title: Decoration[];
    description: Decoration[];
  };
  format: {
    block_color?: string;
    bookmark_icon: string;
    bookmark_cover: string;
  };
}
export interface TextBlock extends BaseTextBlock {
  type: "text";
}
export interface BulletedListBlock extends BaseTextBlock {
  type: "bulleted_list";
}
export interface NumberedListBlock extends BaseTextBlock {
  type: "numbered_list";
}
export interface HeaderBlock extends BaseTextBlock {
  type: "header";
  format?: {
    block_color: Color;
    toggleable?: boolean;
  };
}
export interface SubHeaderBlock extends BaseTextBlock {
  type: "sub_header";
  format?: {
    block_color: Color;
    toggleable?: boolean;
  };
}
export interface SubSubHeaderBlock extends BaseTextBlock {
  type: "sub_sub_header";
  format?: {
    block_color: Color;
    toggleable?: boolean;
  };
}
export interface QuoteBlock extends BaseTextBlock {
  type: "quote";
}
export interface EquationBlock extends BaseTextBlock {
  type: "equation";
}
export interface TodoBlock extends BaseTextBlock {
  type: "to_do";
  properties: {
    title: Decoration[];
    checked: (["Yes"] | ["No"])[];
  };
}
export interface TableOfContentsBlock extends BaseBlock {
  type: "table_of_contents";
  format?: {
    block_color: Color;
  };
}
export interface DividerBlock extends BaseBlock {
  type: "divider";
}
export interface ColumnListBlock extends BaseBlock {
  type: "column_list";
}
export interface ColumnBlock extends BaseBlock {
  type: "column";
  format: {
    column_ratio: number;
  };
}
export interface CalloutBlock extends BaseBlock {
  type: "callout";
  format: {
    page_icon: string;
    block_color: Color;
  };
  properties: {
    title: Decoration[];
  };
}
export interface ToggleBlock extends BaseBlock {
  type: "toggle";
  properties: {
    title: Decoration[];
  };
}
export interface ImageBlock extends BaseContentBlock {
  type: "image";
}
export interface EmbedBlock extends BaseContentBlock {
  type: "embed";
}
export interface VideoBlock extends BaseContentBlock {
  type: "video";
}
export interface PdfBlock extends BaseContentBlock {
  type: "pdf";
}
export interface AudioBlock extends BaseContentBlock {
  type: "audio";
}
export interface FileBlock extends BaseBlock {
  type: "file";
  properties: {
    title: Decoration[];
    size: Decoration[];
    source: string[][];
  };
  file_ids?: string[];
}
export interface CodeBlock extends BaseBlock {
  type: "code";
  properties: {
    title: Decoration[];
    language: Decoration[];
    caption: Decoration[];
  };
}
export interface SyncBlock extends BaseBlock {
  type: "transclusion_container";
}
export interface SyncPointerBlock extends BaseBlock {
  type: "transclusion_reference";
  format: {
    copied_from_pointer: {
      id: string;
      spaceid: string;
    };
    transclusion_reference_pointer: {
      id: string;
      spaceId: string;
    };
  };
}
export interface PageLink extends BaseBlock {
  type: "alias";
  format: {
    alias_pointer: {
      id: string;
    };
  };
}
export interface TableBlock extends BaseBlock {
  type: "table";
  collection_id: ID;
  format: {
    collection_pointer: {
      id: ID;
      table: string;
      spaceId: ID;
    };
    table_block_column_format?: {
      [column: string]: {
        width?: number;
        color?: Color;
      };
    };
    table_block_column_header: boolean;
    table_block_column_order: string[];
  };
  view_ids: ID[];
}
export interface TableRowBlock extends BaseBlock {
  type: "table_row";
  properties: {
    [column: string]: Decoration[];
  };
}
export interface BreadcrumbInstance extends BaseBlock {
  type: "breadcrumb";
}
