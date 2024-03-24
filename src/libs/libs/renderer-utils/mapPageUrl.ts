export const defaultMapPageUrl = (pageId: string) => {
    pageId = (pageId || '').replace(/-/g, '');
    return `/${pageId}`;
};
