import { LitElement, html, css } from "lit";

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {
  static get tag() {
    return "my-card";
  }

  constructor() {
    super();
    this.title = "Title";
    this.description = "Description";
    this.image = "https://via.placeholder.com/150";
    this.backgroundColor = "pink";
    this.fancy = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      :host([fancy]) {
        display: block;
        background-color: pink;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
      }

      .pokemon-card {
        display: inline-grid;
        max-width: 800px;
        border-radius: 100px;
        margin: 16px;
        padding: 20px;
        background-color: pink;
        text-align: center;
      }

      .title {
        color: black;
        font-family: fantasy;
        font-size: 50px;
        margin-bottom: 20px;
      }

      .description {
        color: black;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 30px;
      }

      .img {
        max-width: 50px;
        display: block;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 30px;
      }

      .btn {
        padding: 16px 65px;
        background-color: purple;
        color: white;
        font-family: fantasy;
        border-radius: 10px;
        text-align: center;
        cursor: pointer;
      }

      .focus,
      .btn:hover {
        background-color: lightblue;
      }
    `;
  }
  openChanged(e) {
    console.log(e.newState);
    if (e.newState === "open") {
      this.fancy = true;
    } else {
      this.fancy = false;
    }
  }

  render() {
    return html`
      <div
        class="pokemon-card"
        style="background-color: ${this.backgroundColor};"
      >
        <h1 class="title">${this.title}</h1>
        <button>Toggle</button>
        <p class="description">${this.description}</p>
        <img class="image" src="${this.image}" alt="${this.title}" />
        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
          <summary>Description</summary>
          <div>
            <slot>${this.description}</slot>
            <a href="https://hax.psu.edu">
              <button class="btn"><em>Link for more info</em></button>
            </a>
          </div>
        </details>
      </div>
    `;
  }

  static get properties() {
    return {
      fancy: { type: Boolean, refelect: true },
      title: { type: String },
      description: { type: String },
      image: { type: String },
      backgroundColor: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
