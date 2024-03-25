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
import { UniBookRenderer, Page } from "unibook-renderer";

import 'unibook-renderer/dist/style.css'
import 'prismjs/themes/prism.css'
import 'katex/dist/katex.min.css'

function ExamplePage() {
  const page: Page = ...

  return (
    <UniBookRenderer page={page} />
  )
}
```

### From Notion RecordMap

> Warning: UniBook Renderer는 현재 Notion과 거의 동일한 타입을 사용하나, 추후 변경될 가능성이 높습니다.

```tsx
function ExamplePage() {
  const recordMap: { ... }

  return (
    <UniBookRenderer page={{
      ...recordMap,
      blockMap: recordMap.block,
    }} />
  )
}
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

## Related

* [react-notion-x](https://github.com/NotionX/react-notion-x) - React renderer for notion
  * `unibook-renderer` 는 `react-notion-x` 코드를 기반으로 collection를 제거하고, 페이지에서 확장성 높은 기능을 구현했습니다.
