import { LitElement, html, css } from 'lit-element'

export class ConImageGallery extends LitElement {
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
    return html`<div>element name works!</div>`
  }

  firstUpdated() {}

  connectedCallback() {
    super.connectedCallback()
  }

  disconnectedCallback() {
    super.connectedCallback()
  }
}
