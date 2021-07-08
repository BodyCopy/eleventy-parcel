import { LitElement, html, css } from 'lit-element'
import { PathDrawer } from '../helpers/animations'
import {
  CreateObserverWithCallback,
  ObserverOptions,
} from '../helpers/intersectionObserverHelpers'

export class ConHighlight extends LitElement {
  static get properties() {
    return {
      type: { attribute: 'type', type: String },
    }
  }

  constructor() {
    super()
  }

  static get styles() {
    return css`
      :host {
        position: relative;
      }

      svg {
        fill: transparent;
        stroke: blue;
        stroke-width: 4%;
      }

      .scribble-underline-path {
        mix-blend-mode: multiply;

        position: absolute;
        bottom: -0.6em;
        left: -0.1em;
        overflow: visible;

        stroke: tomato;
        stroke-width: calc(0.2.8 * 1em);
        transform: scaleY(1) scaleX(1.01);
      }

      @keyframes drawPath {
        to {
          stroke-dashoffset: 0;
        }
      }
    `
  }

  highlightStyles = {
    circle: '<svg></svg>',
    underline: '<svg></svg>',
    crossOut: '<svg></svg>'
  }

  render() {
    return html`<slot></slot>
      <svg class="scribble-underline-path" width="100%" viewBox="0 0 143 8.89">
        <path
          d="M1.72.83C47.93.93,96.79.79,143,.89c-41.89-2.5-101.26.62-143,5,44-.63,93-.37,137-1-2.71-.27-26.43"
          fill="none"
        />
      </svg>`
  }

  firstUpdated() {
    // if (e.isIntersecting == true) {
    //   paths.forEach((path) => {
    //     console.log(path)
    //     path.style.animation = `drawPath 2s ease forwards`
    //     observer.unobserve(e)
    //   })

    let SVGElement = this.shadowRoot.querySelector('svg')
    PathDrawer(SVGElement)
    let options = new ObserverOptions(null, 1, '0px 0px -40% 0px')

    CreateObserverWithCallback(
      SVGElement,
      (e) => {
        let paths = e.target.querySelectorAll('path')
        if (e.isIntersecting === true) {
          paths.forEach((path) => {
            path.style.animation = `drawPath 2s ease forwards`
          })
        }
      },
      options
    )
  }

  connectedCallback() {
    super.connectedCallback()
  }

  disconnectedCallback() {
    super.connectedCallback()
  }
}
