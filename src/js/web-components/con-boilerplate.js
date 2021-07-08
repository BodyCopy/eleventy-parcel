import { LitElement, html, css } from 'lit-element'
import { customElement, property } from 'lit/decorators.js'

@customElement('con-placeholder')
export class PlaceHolder extends LitElement {

  @property()
  myProp = 'data'

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
