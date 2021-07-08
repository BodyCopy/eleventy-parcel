import { LitElement, html, css } from 'lit-element'

export class ConWordTyper extends LitElement {
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
    return html`<div id="target">WordTyper name works!</div>`
  }

  firstUpdated() {
    // async function mimicTyping(target, words, period = true, typeDelay = 120, wordDelay = 800) {
    //   let amountOfWords = words.length;
    //   let cursor = target.parentNode.querySelector('#cursor');
    //   let typeDelayThird = typeDelay / 3;
    //   //iterates over the array of words//this can be abstracted down for reuse
    //   for (let i = 0; i < amountOfWords; i++) {
    //     let testArray = words[i].split('');
    //     let backSpaceArray = words[i].split(''); //something wrong with this
    //     let amount = testArray.length;
    //     let newString, backSpace;
    //     //writes the word
    //     for (let ii = 0; ii < amount; ii++) {
    //       await new Promise((resolve) => {
    //         setTimeout(() => {
    //           newString = String(testArray.shift());
    //           target.textContent += newString;
    //           resolve();
    //         }, typeDelay);
    //       });
    //     }
    //     //adds a short delay before backspacing begins
    //     await new Promise((resolve) => {
    //       cursor.classList.toggle('softBlink');
    //       cursor.classList.toggle('hide', amountOfWords == i + 1)
    //       setTimeout(() => {
    //         cursor.classList.toggle('softBlink');
    //         resolve()
    //       }, wordDelay);
    //     });
    //     //backspaces away the word
    //     if (amountOfWords > i + 1) {
    //       for (let iii = amount; iii >= 0; iii--) {
    //         await new Promise((resolve) => {
    //           setTimeout(() => {
    //             backSpace = backSpaceArray.slice(0, iii).join("");
    //             target.textContent = backSpace;
    //             resolve();
    //           }, typeDelayThird);
    //         });
    //       }
    //     }
    //     if (period == true) {
    //       if (i + 1 == amountOfWords) {
    //         target.innerHTML = target.textContent + '<span>.</span>';
    //       }
    //     }
    //   }
    // }
    let words = ['big long thing to type','small fat thing to type'];
    let target = document.querySelector('#target');
    // mimicTyping(target,words);
  }

  connectedCallback() {
    super.connectedCallback()
  }

  disconnectedCallback() {
    super.connectedCallback()
  }
}
