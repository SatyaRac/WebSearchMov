import css from "bootstrap/dist/css/bootstrap.min.css";

class MovieItem extends HTMLElement {
    constructor(){
        super();
        this.shadowDom = this.attachShadow({mode: "open"});
    }

    set movie(movie){
        this._movie = movie;
        this.render();
    }

    render() {
        this.shadowDom.innerHTML= `
        <style>
            ${css}

            .card>img{
                height: 300px;
                object-fit: cover;
            }
            .card:hover{
                cursor: pointer;
            }
        </style>
        <div class="card">
            <img src="http://image.tmdb.org/t/p/w185/${this._movie.poster_path}" class="card-img-top">
            <div class="card-body">
                <h6 class="card-title">${this._movie.title}</h6>
                <p class="card-text">${this._movie.year}</p>
            </div>
        </div>`;
    }
}
customElements.define("movie-item",MovieItem);
