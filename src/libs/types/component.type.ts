/* eslint-disable @typescript-eslint/no-explicit-any */
import { ComponentPropsWithRef, ReactNode } from "react";

import { CodeBlock } from ".";

export type CodeComponentProps = ComponentPropsWithRef<"code"> & {
  block: CodeBlock;
  defaultLanguage?: string;
  className?: string;
};

export interface RendererComponents {
  Image: any;
  Link: (props: ComponentPropsWithRef<"a">) => ReactNode;
  PageLink: (props: ComponentPropsWithRef<"a">) => ReactNode;

  Code: (props: CodeComponentProps) => ReactNode;
  Equation: any;

  PDF: any;
}
