import css from "bootstrap/dist/css/bootstrap.min.css";

class NavBar extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    connectedCallback() {
        this.render();
    }

    set clickEvent(event){
        this._clickEvent = event;
        this.render();
    }

    get value(){
        return this.shadowDOM.querySelector("#searchElement").value;
    }




    render() {
        this.shadowDOM.innerHTML = `
        <style>
            ${css}

        </style>
       
        <nav class="navbar navbar-light bg-light fixed-top">
        <div class="container">
            <a class="navbar-brand" style="font-size: 32px; font-style:initial;"  href="#">Moview Review</a>
    
        <form class="form-inline ">
            <input class="form-control mr-sm-2" type="search" placeholder="Search movie" id="searchElement">
            <button id="searchButtonElement" class="btn btn-outline-secondary my-2 my-sm-0" type="submit">Search</button>
        </form>
        
    </div>
  </nav> `;
        this.shadowDOM.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
    }


}


customElements.define('nav-bar', NavBar);
