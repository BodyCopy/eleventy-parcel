import { LitElement, html, css } from 'lit-element'

export class ConCite extends LitElement {
  constructor() {
    super()
  }

  static get properties() {
    return {
      footnote: { attribute: 'footnote', type: String },
    }
  }

  static get styles() {
    return css`
      :host {
        cursor: pointer;
      }
      .citation {
        --cite-color: blue;
        color: var(--cite-color);
        transition: 80ms ease-in;
      }
      .citation:hover {
        filter: brightness(0.4);
      }
    `
  }

  render() {
    return html`<span
      class="citation"
      @click="${() => {
        this._updateFootnote(this.footnote)
      }}"
    >
      <slot></slot>
    </span>`
  }

  firstUpdated() {}

  _updateFootnote(footnote) {
    let event = new CustomEvent('update-footnote', {
      detail: { message: footnote },
      bubbles: true,
      composed: true,
    })

    this.dispatchEvent(event)
  }

  connectedCallback() {
    super.connectedCallback()
  }

  disconnectedCallback() {
    super.connectedCallback()
  }
}
