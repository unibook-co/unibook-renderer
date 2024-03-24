/* eslint-disable @typescript-eslint/no-explicit-any */
import { BlockProps } from "./BlockProps";
import { AliasBlock } from "./blocks/alias.block";
import { AssetBlock } from "./blocks/asset.block";
import { AudioBlock } from "./blocks/audio.block";
import { BookmarkBlock } from "./blocks/bookmark.block";
import { BulletedListBlock } from "./blocks/bulletedList.block";
import { CalloutBlock } from "./blocks/callout.block";
import { CodeBlock } from "./blocks/code.block";
import { ColumnBlock } from "./blocks/column.block";
import { ColumnListBlock } from "./blocks/columnList.block";
import { DividerBlock } from "./blocks/divider.block";
import { EmbedBlock } from "./blocks/embed.block";
import { EquationBlock } from "./blocks/equation.block";
import { FileBlock } from "./blocks/file.block";
import { HeaderBlock } from "./blocks/header.block";
import { InjectionBlock } from "./blocks/injection.block";
import { NumberedListBlock } from "./blocks/numberedList.block";
import { PageBlock } from "./blocks/page.block";
import { QuoteBlock } from "./blocks/quote.block";
import { SubHeaderBlock } from "./blocks/subHeader.block";
import { SubSubHeaderBlock } from "./blocks/subSubHeader.block";
import { TableBlock } from "./blocks/table.block";
import { TableOfContentsBlock } from "./blocks/tableOfContents.block";
import { TableRowBlock } from "./blocks/tableRow.block";
import { TextBlock } from "./blocks/text.block";
import { ToDoBlock } from "./blocks/toDo.block";
import { ToggleBlock } from "./blocks/toggle.block";
import { TransclusionContainerBlock } from "./blocks/transclusionContainer.block";
import { TransclusionReferenceBlock } from "./blocks/transclusionReference.block";

export const Block = (props: BlockProps) => {
  const { block } = props;
  if (!block) {
    return null;
  }

  switch (block.type) {
    case "page":
      return <PageBlock {...props} />;

    case "header":
      return <HeaderBlock {...props} />;

    case "sub_header":
      return <SubHeaderBlock {...props} />;

    case "sub_sub_header":
      return <SubSubHeaderBlock {...props} />;

    case "divider":
      return <DividerBlock {...props} />;

    case "text": {
      return <TextBlock {...props} />;
    }

    case "bulleted_list":
      return <BulletedListBlock {...props} />;

    case "numbered_list": {
      return <NumberedListBlock {...props} />;
    }

    case "embed":
      return <EmbedBlock {...props} />;

    case "pdf":
    case "image":
    case "video":
      return <AssetBlock {...props} />;

    case "audio":
      return <AudioBlock {...props} />;

    case "file":
      return <FileBlock {...props} />;

    case "equation":
      return <EquationBlock {...props} />;

    case "code":
      if (props?.block?.properties?.caption?.[0]?.[0] === "unibook:html") {
        return <InjectionBlock {...props} />;
      }

      return <CodeBlock {...props} />;

    case "column_list":
      return <ColumnListBlock {...props} />;

    case "column":
      return <ColumnBlock {...props} />;

    case "quote": {
      return <QuoteBlock {...props} />;
    }

    case "callout":
      return <CalloutBlock {...props} />;

    case "bookmark":
      return <BookmarkBlock {...props} />;

    case "toggle":
      return <ToggleBlock {...props} />;

    case "table_of_contents":
      return <TableOfContentsBlock {...props} />;

    case "to_do":
      return <ToDoBlock {...props} />;

    case "transclusion_container":
      return <TransclusionContainerBlock {...props} />;

    case "transclusion_reference":
      return <TransclusionReferenceBlock {...props} />;

    case "alias":
      return <AliasBlock {...props} />;

    case "table":
      return <TableBlock {...props} />;

    case "table_row":
      return <TableRowBlock {...props} />;

    default:
      if (process.env.NODE_ENV !== "production") {
        console.log(
          "Unsupported type " + (block as any).type,
          JSON.stringify(block, null, 2)
        );
      }

      return <div />;
  }
};
