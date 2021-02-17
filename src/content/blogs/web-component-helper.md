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

### Issues

I've run into some issues with Web Components flashing in when reloading a page, which leads me to think they are not the best solution for static blog type web sites. I can see their use along side a framework that utalizing a SPA approach.

# Lit-Element

### Common Issues

When using Lit-Elements lifecycle methods dont forget to call the super version or your component wont render.

```js
  connectedCallback() {
    super.connectedCallback()
  }

  disconnectedCallback() {
    super.connectedCallback()
  }
```
