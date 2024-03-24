import { RendererContext } from "@/contexts/rendererContext/rendererContext";
import { useContext } from "react";

export function useRendererContext() {
  return useContext(RendererContext);
}
