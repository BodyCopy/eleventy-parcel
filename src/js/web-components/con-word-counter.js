import { LitElement, html, css } from 'lit-element'

export class ConWordCounter extends LitElement {
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
    return html`<div>word counter name works!</div>`
  }

  wordCount = function countWords() {
    let amountOfWords = 0
    let blogLength = doc.querySelectorAll('.body-text')
    for (let words of paragraphs) {
      words = words.textContent.split(' ')
      amountOfWords += words.length
    }
    return amountOfWords
  }

  firstUpdated() {}

  connectedCallback() {
    super.connectedCallback()
  }

  disconnectedCallback() {
    super.connectedCallback()
  }
}
