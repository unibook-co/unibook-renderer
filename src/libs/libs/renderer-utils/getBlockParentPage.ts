import { Block, PageMap, PageBlock } from '@/types';

export const getBlockParentPage = (
    block: Block,
    page: PageMap,
    {
        inclusive = false,
    }: {
        inclusive?: boolean;
    } = {}
): PageBlock | null => {
    let currentRecord: Block = block;

    while (currentRecord != null) {
        if (inclusive && (currentRecord as Block)?.type === 'page') {
            return currentRecord as PageBlock;
        }

        const parentId: string = currentRecord.parent_id;
        if (!parentId) {
            break;
        }

        currentRecord = page.blockMap[parentId]?.value;

        if ((currentRecord as Block)?.type === 'page') {
            return currentRecord as PageBlock;
        }
    }

    return null;
};
