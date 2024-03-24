import { useRendererContext } from "@/hooks/useRendererContext";
import { BlockProps } from "./BlockProps";
import { OverrideBlock } from "@/types/override.type";

export function OverrideBlockDecorator<
  T extends HTMLElement | undefined = HTMLDivElement
>({
  children,
  props: props,
  blockRef,
  Block: Block,
}: {
  children: React.ReactNode;
  props: BlockProps;
  blockRef: T extends HTMLElement ? React.RefObject<T> : undefined;
  Block?: OverrideBlock<T>;
}) {
  const context = useRendererContext();
  if (!Block) {
    return <>{children}</>;
  }
  return (
    <Block blockProps={props} blockRef={blockRef} blockContext={context}>
      {children}
    </Block>
  );
}
