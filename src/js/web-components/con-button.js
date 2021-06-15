import { LitElement, html, css } from 'lit-element'

export class ConButton extends LitElement {
  constructor() {
    super()
  }

  static get styles() {
    return css`
      :host {
        display: inline-block;
      }
      button {
        font-family: inherit;
        font-size: 1rem;
        font-weight: 600;
        padding: 0.5rem 1rem;
        background-color: orange;
        border: 2px solid black;

        transition: transform 60ms ease-in-out;
      }
      button:hover {
        filter: brightness(0.9);
      }
      button:active{
        transform: translateY(1px);
        box-shadow: inset 0 0 3px #000;
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
