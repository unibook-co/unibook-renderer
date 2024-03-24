import * as React from "react";

import { Block } from "@/types";
import { cs } from "@/utils/cn";

import { PageIcon } from "./pageIcon";
import { RichText } from "./richText";

export const PageTitleImpl: React.FC<{
  block: Block;
  className?: string;
  defaultIcon?: string;
}> = ({ block, className, defaultIcon, ...rest }) => {
  if (!block) return null;
  if (!block.properties?.title) {
    return null;
  }

  return (
    <span className={cs("notion-page-title", className)} {...rest}>
      <PageIcon
        block={block}
        defaultIcon={defaultIcon}
        className="notion-page-title-icon"
      />

      <span className="notion-page-title-text">
        <RichText value={block.properties?.title} block={block} />
      </span>
    </span>
  );
};

export const PageTitle = React.memo(PageTitleImpl);
