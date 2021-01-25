---
  layout: page.njk
  permalink: 'Blog/Testing2/index.html'
  tags: blog
  pageTitle: "WC CheatSheet"
---

You can remove encapsulation from a web component by call the `createRenderRoot()` method and returning `this` like so
```js
 createRenderRoot(){
    return this;
  }
```