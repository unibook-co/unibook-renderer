<p align="center">
  <img src="./assets/logo.png" width="10%" alt="Unibook" />
</p>
<h1 align="center">unibook-renderer</h1>
<h5 align="center">UniBook Page Renderer</h5>
<p align="center">
  <img alt="Node.js" src="https://img.shields.io/npm/v/unibook-renderer"/>
  <img alt="Typescript" src="https://img.shields.io/badge/Language-Typescript-blue?logo=typescript"/>
</p>

---
## Features
* **Extensibility**: 확장성 높은 페이지 렌더링 라이브러리

## install

```
npm install unibook-renderer
yarn add unibook-renderer
```

## Usage

```tsx
import 'unibook-renderer/styles/styles.css'
import { UniBookRenderer, Page } from "unibook-renderer";

function ExamplePage() {
  const page: Page = ...

  return (
    <UniBookRenderer page={page} />
  )
}
```

## Style

```tsx
import 'unibook-renderer/styles/styles.css'
import 'prismjs/themes/prism.css'
import 'katex/dist/katex.min.css'
```

## Block Overriding

### Block

```tsx
export function OverrideTextBlock({ children, blockProps, blockContext }: OverrideBlockProps) {
    return (
        <div
            id={blockProps?.block.id}
        >
            {children}
            <div>label</div>
        </div>
    );
}
```

### Renderer

```tsx
...

function ExamplePage() {
  const page: Page = ...

  return (
    <UniBookRenderer
      page={page}
      overrideBlocks={{
        Text: OverrideTextBlock
      }}
    />
  )
}
```
