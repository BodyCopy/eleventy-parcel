import { LitElement, html, css } from 'lit-element'

export class ConTextarea extends LitElement {
  static get properties() {
    return {
      myProp: { type: String },
      placeholder: {attribute: 'placeholder'},
      name: {attribute: 'name'}
    }
  }

  constructor() {
    super()
    
  }

  static get styles() {
    return css`
        :host{
      display: inline-block;
      height: max-content;
    }
    textarea{
      box-sizing: border-box;
      font-family: inherit;
      font-size: 1rem;
      font-weight: 500;
      border: 2px solid black;
      padding: 0.5rem;
      
      transform: border-color 60ms ease-in-out;
    }
    textarea:focus{
      caret-color: red;
      border-color: blue;
    }
    `
  }

  render() {
    return html`<textarea placeholder="${this.placeholder}" name="${this.name}">text area</textarea>`
  }

  firstUpdated() {}

  connectedCallback() {
    super.connectedCallback()
  }

  disconnectedCallback() {
    super.connectedCallback()
  }
}
