import { useRendererContext } from "@/hooks/useRendererContext";
import { OverrideBlockDecorator } from "../OverrideBlockDecorator";

import { BlockProps } from "../BlockProps";
import { SyncPointerBlock } from "./components/syncPointerBlock";

export function TransclusionReferenceBlock(props: BlockProps) {
  const { overrideBlocks } = useRendererContext();
  const { level } = props;

  return (
    <OverrideBlockDecorator
      blockRef={undefined}
      props={props}
      Block={overrideBlocks.TransclusionReference}
    >
      <SyncPointerBlock {...props} level={level + 1} />
    </OverrideBlockDecorator>
  );
}
