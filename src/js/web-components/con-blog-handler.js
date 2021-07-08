import { LitElement, html, css } from 'lit-element'

export class ConBlogHandler extends LitElement {
  static get properties() {
    return {
      footnotes: { attribute: 'footnotes', type: Boolean },
      progressBar: { attribute: 'progress-bar', type: Boolean },
      footnote: {content: '', attribute: false},
    }
  }

  constructor() {
    super()
    // this.progressBar = false
  }

  static get styles() {
    return css`
    :host{
      display: grid;
      grid-row-gap: var(--grid-row-gap);
    }
    `
  }

  render() {
    return html`
      <slot> </slot>
      ${this.progressBar ? html`<con-progress-bar></con-progress-bar>` : null}
      ${this.footnotes
        ? html`<con-footnote visible="false"></con-footnote>`
        : null}
      <p>Testing</p>
    `
  }

  addFig() {
    let figCaptions = doc.querySelectorAll('figcaption')
    for (let i = 0; i < figCaptions.length; i++) {
      figCaptions[i].innerHTML = `<em>fig ${i + 1}. ` + figCaptions[i].innerHTML
    }
  }

  firstUpdated() {
    //function to update footnote content, needs refactor
    let cites = this.querySelectorAll('con-cite');
    let i = 1;
    cites.forEach((c)=>{
      c.innerHTML = c.textContent + `<sup>${i}</sup>`;
      i++;
    })

    let footnote = this.shadowRoot.querySelector('con-footnote')
    this.addEventListener('update-footnote', (e) => {
      if (footnote.getAttribute('content') === e.detail.message) {
        console.log('same')
        footnote.setAttribute('content', '')
        footnote.setAttribute('visible', 'false')
      } else {
        footnote.setAttribute('content', e.detail.message)
        footnote.setAttribute('visible', 'true')
      }
    })
  }

  connectedCallback() {
    super.connectedCallback()
  }

  disconnectedCallback() {
    super.connectedCallback()
  }
}
