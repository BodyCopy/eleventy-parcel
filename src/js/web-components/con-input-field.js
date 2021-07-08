import { LitElement, html, css } from 'lit-element'
import{ customElement } from 'lit/decorators.js'

@customElement('con-input-field')
export class ConInputField extends LitElement {

  static get properties() {
    return {
      myProp: { type: String },
      placeholder:{ type: String},
      type: {attribute: 'type', type:String}
    }
  }

  constructor() {
    super()
    this.type = 'text'
  }

  static get styles() {
    return css`
    :host{
      display: inline-block;
      /* font-family: --; */
    }
    input{
      box-sizing: border-box;
      font-family: inherit;
      font-size: 1rem;
      font-weight: 500;
      padding: 0.5rem;
      border: 2px solid black;

      transform: border-color 60ms ease-in-out;
    }
    input:focus{
      caret-color: red;
      border-color: blue;
    }
    `
  }

  render() {
    return html`
    <input type="${this.type}" placeholder="${this.placeholder}">
    `
  }

  firstUpdated() {}

  connectedCallback() {
    super.connectedCallback()
  }

  disconnectedCallback() {
    super.connectedCallback()
  }
}
