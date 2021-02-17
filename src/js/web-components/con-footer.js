import { LitElement, html, css } from 'lit-element'
import {
  createObserverWithCallback,
  ObserverOptions,
} from '../helpers/intersectionObserverHelpers'

export class ConFooter extends LitElement {
  constructor() {
    super()
  }

  static get styles() {
    return css`
      :host{
        height: 100vh;
        z-index: 0;
        width: 100%;
      }

      .footer-watcher {
        width: 100%;
        height: 8px;
      }

      .fixed {
        position: fixed;
        bottom: 0;
      }
    `
  }

  render() {
    return html`
        <div class="footer-watcher">fuck</div>
      <footer>
        <slot name="menu"></slot>
        <slot name="other"></slot>
      </footer>
    `
  }

  //   connectedCallback() {
  //     window.addEventListener('scroll', () => {
  //       console.log('scrolled');
  //       this.progress();
  //     })
  //   }

  firstUpdated() {
    gsap.set('footer', { backgroundColor: 'red' })

    const footerWatcher = this.shadowRoot.querySelector('.footer-watcher')
    const footer = this.shadowRoot.querySelector('footer')

    function makeFixed(e) {
      if (e.isIntersecting) {
        footer.classList.add('fixed')
        // footNote.classList.add('opacityZero')
      }
      if (!e.isIntersecting) {
        footer.classList.remove('fixed')
        // footNote.classList.remove('opacityZero')
      }
    }

    let footerRect = footer.getBoundingClientRect().height
    let footerFixedOptions = new ObserverOptions(null,0,`${footerRect}px 0px ${footerRect * 2}px 0px`);
    createObserverWithCallback(
      footerWatcher,
      (e) => {
        makeFixed(e)
        console.log(footer)
      },
      footerFixedOptions
    )
  }

  disconnectedCallback() {}
}
