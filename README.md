<p align="center">
  <img src="./assets/logo.png" width="10%" alt="Unibook" />
</p>
<h1 align="center">unibook-renderer</h1>
<h5 align="center">UniBook Page 렌더러</h5>
<p align="center">
  <img alt="Node.js" src="https://img.shields.io/npm/v/unibook-renderer"/>
  <img alt="Typescript" src="https://img.shields.io/badge/Language-Typescript-blue?logo=typescript"/>
</p>

---

## install

```
npm install unibook-renderer
yarn add unibook-renderer
```

## Usage

```tsx
import { UniBookRenderer, Page } from "unibook-renderer";

function ExamplePage() {
  const page: Page = ...

  return (
    <UniBookRenderer page={page} />
  )
}
```
