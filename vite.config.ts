import * as path from 'path';

import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
    build: {
        lib: {
            entry: path.resolve(__dirname, 'src/libs/index.ts'),
            name: 'index',
            fileName: 'index',
        },
        rollupOptions: {
            external: ['react'],
            output: {
                globals: {
                    react: 'React',
                },
            },
        },
        commonjsOptions: {
            esmExternals: ['react'],
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src/libs'),
        },
    },
    plugins: [dts()],
});
