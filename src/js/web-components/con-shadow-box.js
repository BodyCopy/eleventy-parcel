import { LitElement, html, css } from 'lit-element'

export class ConShadowBox extends LitElement {
  static get properties() {
    return {
      myProp: { type: String },
    }
  }

  constructor() {
    super()
  }

  static get styles() {
    return css`
      .image-modal {
        position: fixed;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        background-color: rgba(000, 000, 000, 0.6);
        z-index: 1000;
        padding: 5vmin;
        transition: opacity 240ms ease-in;
        animation: fadeIn 240ms ease-in;
        will-change: opacity;
      }

      .modal-caption {
        margin-top: var(--margin);
        color: whitesmoke;
      }

      .white-matte {
        background-color: white;
        padding: calc(2rem);
      }
    `
  }

  render() {
    return html`<div class="image-modal">
      <slot class="image"></slot>
    </div>`
  }

  firstUpdated() {}

  connectedCallback() {
    super.connectedCallback()
  }

  disconnectedCallback() {
    super.connectedCallback()
  }
}
