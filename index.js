
class MyProduct extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
        this.shadowRoot.querySelector('section').innerHTML = this.htmlcomponent;
        console.log(this.shadowRoot);
    }
    htmlcomponent = `<h1>html customElements</h1>`
}

const template = document.createElement('template');
template.innerHTML = `<style>h1{color:red}</style><section></section>`;

window.customElements.define("my-product", MyProduct);

