import { Block } from '@/types';

export interface BlockProps<B extends Block = Block> {
    block: B;
    level: number;

    className?: string;
    bodyClassName?: string;
    hideBlockId?: boolean;

    children?: React.ReactNode;
}
