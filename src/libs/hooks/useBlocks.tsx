import { useMemo } from "react";

import { useRendererContext } from "./useRendererContext";

export function useBlocks() {
  const { page } = useRendererContext();
  const blocks = useMemo(() => Object.values(page.blockMap), [page.blockMap]);

  return {
    blocks,
    blockMap: page.blockMap,
  };
}
