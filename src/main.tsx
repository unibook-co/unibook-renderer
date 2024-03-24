import React from "react";
import ReactDOM from "react-dom/client";
import "katex/dist/katex.min.css";
import "prismjs/themes/prism.css";
import "./libs/styles/styles.css";
import "./style.css";

import { UniBookRenderer, Code, Equation } from "./libs";
import { pageExample } from "./page";

ReactDOM.createRoot(document.getElementById("root")!).render(
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
