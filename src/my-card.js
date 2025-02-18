import { LitElement, html, css } from "lit";
import "@haxtheweb/meme-maker/meme-maker.js";

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
    this.title = "Mew EX";
    this.description = "Mew EX from Paldean Fates";
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
        display: inline-block;
        background-color: pink;
        border: 2px solid fuchsia;
        box-shadow: 10px 5px 5px red;
      }

      .pokemon-card {
        display: block;
        width: 300px;
        border-radius: 20px;
        margin: 16px;
        padding: 20px;
        background-color: pink;
        text-align: center;
      }

      .title {
        color: black;
        font-family: courier;
        font-size: 30px;
        margin-bottom: 10px;
      }

      .description {
        color: black;
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 30px;
      }

      .image {
        max-width: 200px;
        display: block;
        margin: 0 auto;
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

      details summary {
        text-align: left;
        font-size: 20px;
        padding: 8px 0;
      }

      details[open] summary {
        font-weight: bold;
      }

      details div {
        border: 2px solid black;
        text-align: left;
        padding: 8px;
        height: 70px;
        overflow: auto;
      }
    `;
  }

  openChanged(e) {
    console.log(e);
    if (e.target.getAttribute("open") !== null) {
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
        <p class="description">
          <slot>${this.description}</slot>
        </p>
        <!-- <img class="image" src="${this.image}" alt="${this.title}" /> -->
        <meme-maker
          alt="Surprised Pikachu"
          image-url="https://external-preview.redd.it/0UF4Gqxwe330DKxNz1_GpmkwIDX0e_TyJdXbbkDVm78.jpg?width=640&crop=smart&auto=webp&s=9acdc0d2e2e8e98861b235a29ac674ed3397e10f"
          bottom-text="in Programming for Divs"
          top-text="When I have to program"
        >
        </meme-maker>
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
      fancy: { type: Boolean, reflect: true },
      title: { type: String },
      description: { type: String },
      image: { type: String },
      backgroundColor: { type: String },
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
