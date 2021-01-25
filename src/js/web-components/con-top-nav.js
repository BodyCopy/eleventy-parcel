import { LitElement, html, css } from 'lit-element'
import {
  createObserverWithCallback,
  ObserverOptions,
} from '../helpers/intersectionObserverHelpers'

export class ConTopNav extends LitElement {
  constructor() {
    super()
  }

  static get styles() {
    return css`
      :host {
        position: fixed;
        width: 100%;
        transition: transform 360ms ease;
        will-change: transform;
      }
      :host(.up){
          transform: translateY(-100%);
      }

      .top-navigation {
        --nav-color: whitesmoke;
        display: flex;
        flex-direction: row;
        height: max-content;
        padding: 0.5rem 2rem;
        background: var(--nav-color);
      }

      .nav-menu {
        margin-left: auto;
        display: flex;
        gap: 2rem;

        &__catagory {
          position: relative;
          z-index: 1;

          &-items {
            position: absolute;
            visibility: hidden;
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
            padding: 1rem;
            top: 1em;
            left: -1rem;
            z-index: -1;
            background-color: var(--nav-color);
            width: max-content;
          }

          &:hover .nav-menu__catagory-items {
            visibility: visible;
          }
        }

        &__item {
          font-size: 2rem;
          display: inline-block;
        }
      }
    `
  }

  render() {
    return html`
      <nav class="top-navigation">
        <slot name="wordmark"></slot>
        <slot name="menu"></slot>
      </nav>
    `
  }

  //   connectedCallback() {
  //     window.addEventListener('scroll', () => {
  //       console.log('scrolled');
  //       this.progress();
  //     })
  //   }

  firstUpdated() {
    function hideNav() {
      let scrollY = window.scrollY
      if (scrollY < scrollYPrev) {
        scrollingUp = true
      } else {
        scrollingUp = false
      }
      scrollYPrev = scrollY

      topNav.classList.toggle('up', scrollingUp === false);
    }

    let scrollingUp = null
    let scrollYPrev

    const topNav = this.shadowRoot.host
    window.addEventListener('scroll', () => {
      hideNav()
    })
  }

  disconnectedCallback() {}
}
