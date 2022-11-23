class MyProduct extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.querySelector("section").innerHTML = this.htmlcomponent;
    // this.shadowRoot.styleSheets[0].href = "";
    console.log(this.shadowRoot);
  }
  htmlcomponent = `
   <h1>html customElements</h1>
   <button onclick="child()"> button</button>
   `;
}
function child() {
  demo();
}

const template = document.createElement("template");
template.innerHTML = `<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous"><section class="container"></section>`;

window.customElements.define("my-product", MyProduct);
