import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'; 

@customElement('con-new-lit')
export class NewLit extends LitElement {
  
  @property()
    message = 'Nice to see you';
  

  constructor() {
    super()
    
  }

  static get styles() {
    return css``
  }

  render() {
    return html`<div>${this.message}</div>`
  }

  firstUpdated() {}

  connectedCallback() {
    super.connectedCallback()
  }

  disconnectedCallback() {
    super.connectedCallback()
  }
}
