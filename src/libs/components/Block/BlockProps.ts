import { Block } from "@/types";

export interface BlockProps {
  block: Block;
  level: number;

  className?: string;
  bodyClassName?: string;
  hideBlockId?: boolean;

  children?: React.ReactNode;
}
