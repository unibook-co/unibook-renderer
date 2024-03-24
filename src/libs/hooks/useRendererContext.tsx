import { useContext } from "react";

import { RendererContext } from "@/contexts/rendererContext/rendererContext";

export function useRendererContext() {
  return useContext(RendererContext);
}
