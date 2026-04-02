import { useContext } from 'react';

import { RendererContext } from '@/contexts/rendererContext/context';

export function useRendererContext() {
    return useContext(RendererContext);
}
