import { createContext } from 'react';

import { defaultRendererContextValue } from './default';
import { RendererContextValue } from './rendererContext.type';

export const RendererContext = createContext<RendererContextValue>(
    defaultRendererContextValue
);
