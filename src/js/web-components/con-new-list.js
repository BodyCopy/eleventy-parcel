import { LitElement, html, css } from 'lit-element'
import { customElement, property, query } from 'lit/decorators.js'

@customElement('con-new-list')
export class ConNewList extends LitElement {
  @property()
  listItems = [
    { text: 'Start Lit tutorial', completed: true },
    { text: 'Make to-do list', completed: false },
  ]

  static get styles() {
    return css`
      .completed {
        text-decoration-line: line-through;
        color: #777;
      }
    `
  }

  constructor() {
    super()
  }

  render() {
    return html`
      <h2>To Do</h2>
      <ul>
        ${this.listItems.map(
          (item) =>
            html`<li
              class=${item.completed ? 'completed' : ''}
              @click=${() => this.completeItem(item)}
            >
              ${item.text}
            </li>`
        )}
      </ul>
      <input id="newitem" aria-label="New item" />
      <button @click=${this.addToDo}>Add</button>
    `
  }

  completeItem(item) {
    item.completed = !item.completed;
    this.requestUpdate();
  }

  addToDo() {
    const input = this.shadowRoot.querySelector('#newitem')
    this.listItems.push({ text: input.value, completed: false })
    this.requestUpdate()
    input.value = ''
  }

  firstUpdated() {}

  connectedCallback() {
    super.connectedCallback()
  }

  disconnectedCallback() {
    super.connectedCallback()
  }
}
