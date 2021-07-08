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

  sidePan() {
    // window.scroll(x,y);
    // window.scrollBy(dx,dy);
    let imageWrapperThree = doc.querySelector('.image-wrapper.sidepan')
    if (imageWrapperThree !== null) {
      let scrollAmount = 0
      let controllers = doc.querySelectorAll('.pan-controller')
      controllers[0].addEventListener('click', (e) => {
        scrollAmount = imageWrapperThree.scrollLeft
        console.log(imageWrapperThree.scrollLeft)

        scrollAmount += 1000
        imageWrapperThree.scrollLeft = `${scrollAmount}`
      })
      controllers[1].addEventListener('click', (e) => {
        scrollAmount = imageWrapperThree.scrollLeft
        console.log(imageWrapperThree.scrollLeft)
        scrollAmount -= 1000
        imageWrapperThree.scrollLeft = `${scrollAmount}`
      })
    }
  }

  firstUpdated() {}

  connectedCallback() {
    super.connectedCallback()
  }

  disconnectedCallback() {
    super.connectedCallback()
  }
}
