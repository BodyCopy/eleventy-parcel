import { LitElement, html, css } from 'lit-element'

export class ConReadTimer extends LitElement {
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
    return html`<div>read timer name works!</div>`
  }

  timeUpdate(element) {

    //object parameters
    let counter = element.counter;
    let target = element.target;
    let speed = element.speed;
    let counterNumber = 0;
    let affix = element.affix;
    let clickRate = element.clickRate || 1;
    if (target < 100) {
      target = target * 1000;
      affix = ' ms'
    }
    let increment = target / speed;
  
    function updateValue() {
      let count = counterNumber;
      counterNumber = Math.round(count + increment)
      if (count < target) {
        counter.innerText = `${counterNumber}` + `${affix}`;
        setTimeout(updateValue, `${clickRate}`);
      } else {
        counter.innerText = target + `${affix}`;
      }
    }
    updateValue();
  }

  firstUpdated() {}

  connectedCallback() {
    super.connectedCallback()
  }

  disconnectedCallback() {
    super.connectedCallback()
  }
}
