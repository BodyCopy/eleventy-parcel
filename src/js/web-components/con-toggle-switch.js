import { LitElement, html, css } from 'lit-element'

export class ConToggleSwitch extends LitElement {
  static get properties() {
    return {
      myProp: { type: String },
    }
  }

  constructor() {
    super()
  }

  static get styles() {
    return css`
      /* The switch - the box around the slider */
      .toggle-switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
      }

      /* Hide default HTML checkbox */
      .toggle-switch input {
        opacity: 0;
        width: 0;
        height: 0;
      }

      /* The slider */
      .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: black;
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }

      .slider:before {
        position: absolute;
        content: '';
        height: 30px;
        width: 30px;
        left: 0px;
        bottom: 0px;
        background-color: white;
        -webkit-transition: 0.4s;
        transition: 0.4s;
      }

      input:checked + .slider {
        background-color: #2196f3;
        border-color: #2196f3;
      }

      input:focus + .slider {
        box-shadow: 0 0 1px var(--current-color);
      }

      input:checked + .slider:before {
        transform: translateX(26px);
      }

      /* Rounded sliders */
      .slider.round {
        border-radius: 34px;
        border: 2px solid black;
      }

      .slider.round:before {
        
        border-radius: 50%;
      }
    `
  }

  render() {
    return html`
      <label class="toggle-switch">
        <input @click="${(e)=>{console.log(e.target.checked);
        }}" type="checkbox" />
        <span class="slider round"></span>
      </label>
    `
  }

  firstUpdated() {}

  connectedCallback() {
    super.connectedCallback()
  }

  disconnectedCallback() {
    super.connectedCallback()
  }
}
