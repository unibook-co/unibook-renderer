import { Block, PageBlock } from "@/types";

export function getBlockIcon(block: Block) {
  if ((block as PageBlock).format?.page_icon) {
    return (block as PageBlock).format?.page_icon;
  }

  return null;
}
