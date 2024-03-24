export type BlockRendererProps = {
  className?: string;
  bodyClassName?: string;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  disableHeader?: boolean;

  blockId?: string;
  hideBlockId?: boolean;
  level?: number;
};
