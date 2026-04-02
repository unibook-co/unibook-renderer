/* eslint-disable @typescript-eslint/no-explicit-any */
import { useMemo } from 'react';

import { RendererComponents } from '@/types';
import { OverrideBlocks } from '@/types/override.type';
import { PageMap } from '@/types/page.type';

import { RendererContext } from './context';
import {
    defaultRendererComponents,
    defaultRendererContextValue,
} from './default';
import {
    MapImageUrlFn,
    MapPageUrlFn,
} from './rendererContext.type';

export type RendererContextProviderProps = {
    page: PageMap;
    components?: Partial<RendererComponents>;
    overrideBlocks?: Partial<OverrideBlocks>;
    darkMode: boolean;
    zoom: any;
    mapPageUrl?: MapPageUrlFn;
    mapImageUrl?: MapImageUrlFn;

    children?: React.ReactNode;
};
export function RendererContextProvider({
    page,
    components,
    overrideBlocks,
    darkMode,
    zoom,
    children,
}: RendererContextProviderProps) {
    const wrappedThemeComponents = useMemo(
        () => ({
            ...components,
        }),
        [components]
    );
    for (const key of Object.keys(wrappedThemeComponents) as Array<
        keyof RendererComponents
    >) {
        if (!wrappedThemeComponents[key]) {
            delete wrappedThemeComponents[key];
        }
    }

    const value = useMemo(
        () => ({
            ...defaultRendererContextValue,
            page,
            components: {
                ...defaultRendererComponents,
                ...wrappedThemeComponents,
            },
            overrideBlocks: overrideBlocks || {},
            darkMode,
            zoom,
        }),
        [page, wrappedThemeComponents, overrideBlocks, darkMode, zoom]
    );

    return (
        <RendererContext.Provider value={value}>
            {children}
        </RendererContext.Provider>
    );
}
