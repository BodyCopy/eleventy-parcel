import { LitElement, html, css } from 'lit-element'

export class ConForm extends LitElement {
  static get properties() {
    return {
      myProp: { type: String },
      name: { attribute: 'name'}
    }
  }

  constructor() {
    super()
    
  }

  static get styles() {
    return css`
    slot{
      display: flex;
      align-items: flex-start;
    }
    ::slotted(*){
      margin: 0;
    }
    `
  }

  render() {
    return html`<form name="${this.name}">
    <slot></slot>
    </form>`
  }

  firstUpdated() {}

  connectedCallback() {
    super.connectedCallback()
  }

  disconnectedCallback() {
    super.connectedCallback()
  }
}
