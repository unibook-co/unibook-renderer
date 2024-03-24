import { Block } from "@/types";

import { getTextContent } from "./getTextContent";

export function getBlockTitle(block: Block) {
  if (block.properties?.title) {
    return getTextContent(block.properties.title);
  }
  return "";
}
