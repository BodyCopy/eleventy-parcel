import { LitElement, html, css } from 'lit-element'

export class ConButton extends LitElement {
  constructor() {
    super()
  }

  static get styles() {
    return css`
      button {
        padding: 0.5rem 1rem;
        font-family: var(--master-font);
        background-color: orange;
        border: 1px solid black;
      }
      button:hover {
        filter: brightness(0.8);
      }
    `
  }

  render() {
    return html` <button
      @click="${() => {
        console.log('clicked')
        this._emitEvent()
      }}"
    >
      <slot></slot>
    </button>`
  }

  _emitEvent() {
    let event = new CustomEvent('button-clicked', {
      bubbles: true,
      composed: true,
    })
    this.dispatchEvent(event)
  }

  firstUpdated() {}

  connectedCallback() {
    super.connectedCallback()
  }

  disconnectedCallback() {
    super.connectedCallback()
  }
}
