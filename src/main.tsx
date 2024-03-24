import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
import "./libs/styles/styles.css";

import { UniBookRenderer } from "./libs";
import { pageExample } from "./page";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <>
      <UniBookRenderer page={pageExample} />
    </>
  </React.StrictMode>
);
