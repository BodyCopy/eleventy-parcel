import { LitElement, html, css } from 'lit-element'

export class PlaceHolder extends LitElement {
  static get properties() {
    return {
      myProp: { type: String },
    }
  }

  constructor() {
    super()
    
  }

  static get styles() {
    return css``
  }

  render() {
    return html`<div></div>`
  }

  firstUpdated() {}

  connectedCallback() {
    super.connectedCallback()
  }

  disconnectedCallback() {
    super.connectedCallback()
  }
}
