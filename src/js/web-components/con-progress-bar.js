import { LitElement, html, css } from 'lit-element'

export class ConProgressBar extends LitElement {
  constructor() {
    super()
  }

  static get styles() {
    return css`
      .progress-bar {
        position: fixed;
        top: 0;
        left:0;
        z-index: 9998;
        display: block;
        height: 0.25rem;
        width: 100%;
        background-color: tomato;
        transform: scaleX(0);
        transform-origin: left;
        transition: transform 120ms ease;
        will-change: transform;
      }
    `
  }

  render() {
    return html` <div class="progress-bar"></div> `
  }

  progress(progressBar) {
    let pageHeightMax =
      document.querySelector('body').getBoundingClientRect().height -
      window.innerHeight
    let amountScrolled = window.pageYOffset //scroll.Y
    let percentageScrolled = amountScrolled / pageHeightMax
    if (amountScrolled < 40) {
      percentageScrolled = 0
    } else if (amountScrolled === pageHeightMax - 80) {
      percentageScrolled = 100
    } else {
      percentageScrolled = percentageScrolled.toFixed(4)
    }
    progressBar.style.transform = `scaleX(${percentageScrolled})`;
  }

  //   connectedCallback() {
  //     window.addEventListener('scroll', () => {
  //       console.log('scrolled');
  //       this.progress();
  //     })
  //   }

  firstUpdated() {
    const progressBar = this.shadowRoot.querySelector('.progress-bar')
    window.addEventListener('scroll', () => {
      this.progress(progressBar)
    })
  }

  disconnectedCallback(){
    window.addEventListener('scroll', () => {
        this.progress(progressBar)
      })
  }
}
