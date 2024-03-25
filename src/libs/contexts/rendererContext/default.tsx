import { defaultMapImageUrl } from '@/libs/renderer-utils/mapImageUrl';
import { defaultMapPageUrl } from '@/libs/renderer-utils/mapPageUrl';
import { RendererComponents } from '@/types';

import { DefaultLink } from './components/link.component';
import { DefaultPageLink } from './components/pageLink.component';

import { RendererContextValue } from '.';

const dummyComponent = (name: string) => () => {
    console.warn(
        `Warning: using empty component "${name}" (you should override this in unibookRenderer.components)`
    );

    return null;
};

export const defaultRendererComponents: RendererComponents = {
    Image: null,
    Link: DefaultLink,
    PageLink: DefaultPageLink,

    Code: dummyComponent('Code'),
    Equation: dummyComponent('Equation'),
    PDF: dummyComponent('PDF'),
};

export const defaultRendererContextValue: RendererContextValue = {
    page: {
        blockMap: {},
        signed_urls: {},
    },
    components: defaultRendererComponents,
    overrideBlocks: {},
    darkMode: false,
    zoom: {},
    mapPageUrl: defaultMapPageUrl,
    mapImageUrl: defaultMapImageUrl,
};
