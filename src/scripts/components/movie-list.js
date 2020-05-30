 
import css from "bootstrap/dist/css/bootstrap.min.css";
import "./movie-item.js";

class MovieList extends HTMLElement {

    constructor() {
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set movies(movies) {
        this._movies = movies;
        this.render();
    }

    renderError(message) {
        this.shadowDOM.innerHTML = `
        <style>
        h3{
            font-weight: lighter;
            margin-top: -150px;
        }
        </style>
        <h3>${message}</h3>
        `;
    }

    


        render() {
            this.shadowDOM.innerHTML = `
            <style>
            ${css}
            
            .row{
                margin-top: -150px;
                padding-bottom: 2rem;
            }
            </style>
            <div class="row" id="results">
            <div class="col-12">
            </div>
            </div>
            `;
    
            
            this._movies.forEach(movie => {
                const movieItemElement = document.createElement("movie-item");
                movieItemElement.movie = movie;
                movieItemElement.classList.add('col-lg-3', 'col-md-4', 'col-6', 'mb-3');
                this.shadowDOM.appendChild(movieItemElement);
            });   
        }
}
    
 
 customElements.define("movie-list", MovieList);