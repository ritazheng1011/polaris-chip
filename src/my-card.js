import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get you HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "Default"
    this.description = "Default Description"
    this.image = "https://via.placeholder.com/150";
    this.backgroundColor = "pink";
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

.pokemon-card {
  display: inline-flex;
  max-width: 400px;
  border-radius: 100px;
  margin: 16px;
  padding: 20px;
  background-color: pink;
  text-align: center;
}

.title {
  color: purple;
  font-family: fantasy;
  font-size: 50px;
  margin-bottom: 20px;
}

.description {
  color: purple;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 30px;
}

.img {
  max-width: 400px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 30px;
}

.fancy {
  background-color: #f0c040; 
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

.btn:hover {
  background-color: lightblue;
}
    `;
  }

  render() {
    return html`
    <div class="pokemon-card" style="background-color: ${this.backgroundColor};">
      <h1 class="title">${this.title}</h1>
        <p class="description">${this.description}</p>
        <img class="image" src="${this.image}" alt="${this.title}"/>
      <a href="https://hax.psu.edu">
        <button class="btn">Details</button>
      </a>
    </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String },
      description: { type: String },
      image: { type: String },
      backgroundColor: { type: String },
    };
  }  
}

globalThis.customElements.define(MyCard.tag, MyCard);
