import { useRef } from "react";

import { useRendererContext } from "@/hooks/useRendererContext";
import { OverrideBlockDecorator } from "../OverrideBlockDecorator";

import { BlockProps } from "../BlockProps";

export function InjectionBlock(props: BlockProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { overrideBlocks } = useRendererContext();

  const content = props?.block?.properties?.title
    .map((title: string[]) => title[0])
    .join("");

  return (
    <OverrideBlockDecorator
      blockRef={ref}
      props={props}
      Block={overrideBlocks.Injection}
    >
      <div
        className="notion-injection px-[3px] py-[2px] mx-[1px]"
        dangerouslySetInnerHTML={{
          __html: content,
        }}
      />
    </OverrideBlockDecorator>
  );
}
