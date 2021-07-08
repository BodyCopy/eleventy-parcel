import { LitElement, html, css } from 'lit'
import { customElement, property } from 'lit/decorators.js'; 

@customElement('con-new-lit')
export class NewLit extends LitElement {
  
  @property()
    message = 'Nice to see you'
    version = 'version 1'
    name = 'your name here'
    checked = false
    placeholder = 'I am a'
  

  constructor() {
    super()
    
  }

  static get styles() {
    return css``
  }

  render() {
    return html`
    <h1>This is the new ${this.version} of Lit</h1>
    <h2>Hello ${this.name}</h2>
    <input @input=${this.changeName}>
    <p>We hope you will stick around and appreciate what we've done for you</p>
    <hr />
    <input ?disabled=${!this.checked} .placeholder=${this.placeholder}>
    <label>Enabled?:
    <input @input=${this.disableField} type="checkbox">
    </label>
    `
  }

  changeName(event){
    const input = event.target;
     this.name = input.value;
     this.update(); 
   }

   disableField(event){
    const input = event.target;
    this.checked = input.checked;
    this.update();
   }

  firstUpdated() {}

  connectedCallback() {
    super.connectedCallback()
  }

  disconnectedCallback() {
    super.connectedCallback()
  }
}
