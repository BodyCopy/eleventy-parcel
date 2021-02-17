import { LitElement, html, css } from 'lit-element'

export class ConFootnote extends LitElement {
  static get properties() {
    return {
      content: { type: String },
      hasContent: { type: Boolean },
      visible: { type: Boolean },
    }
  }

  constructor() {
    super()
    this.visible = false
  }

  static get styles() {
    return css`
      :host {
        --footnote-color: aqua;
        position: fixed;
        bottom: 2rem;
        right: 2rem;
        background-color: var(--footnote-color);
        border: 1px solid black;
        padding: 2rem;
      }

      .footnote {
        display: flex;
        flex-direction: column;
      }

      .close-button{
        align-self: end;
      }

      :host([visible='false']) {
        display: none;
      }
    `
  }

  render() {
    return html`<div class="footnote" @button-clicked="${this._clearFootnote}">
      <con-button class="close-button">X</con-button>
      <span>${this.content}</span>
    </div> `
  }

  _clearFootnote(e) {
    this.setAttribute('content', '')
    this.setAttribute('visible', 'false')
  }

  firstUpdated() {}

  connectedCallback() {
    super.connectedCallback()
  }

  disconnectedCallback() {
    super.connectedCallback()
  }
}
