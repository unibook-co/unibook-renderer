import React from 'react';

import ReactDOM from 'react-dom/client';
import 'katex/dist/katex.min.css';
import 'prismjs/themes/prism.css';
import './libs/style.css';

import { UniBookRenderer } from './libs';
import { Code } from './libs/plugins/code';
import { Equation } from './libs/plugins/equation';
import { pageExample } from './page';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <>
            <div className="m-auto w-fit">
                <UniBookRenderer
                    page={pageExample}
                    components={{
                        Code,
                        Equation,
                    }}
                />
            </div>
        </>
    </React.StrictMode>
);
