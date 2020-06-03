import css from "bootstrap/dist/css/bootstrap.min.css";
import $ from 'jquery';

class MovieItem extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }

    set movie(movie){
        this._movie = movie;
        this.render();
    }

    render() {
        this.shadowDOM.innerHTML= `
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
            <a href="#" data-toggle="modal" class="layerModal_layer" data-target="#movModal${this._movie.id}">
            <img onerror="this.onerror=null;this.src='/img/Error.jpg'"; src="http://image.tmdb.org/t/p/w185/${this._movie.poster_path}" class="card-img-top">
            <div class="card-body">
                <h6 class="card-title">${this._movie.title}</h6>
                <p class="card-text">${this._movie.release_date}</p>
            </div>
            </a>
        </div>
        <div class="modal fade" id="movModal${this._movie.id}" tabindex="-1" role="dialog" aria-labelledy="${this._movie.title}" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-header">
                    <h4 class="modal-title">${this._movie.title}</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hiden="true">&times;</span>
                    </button>
                <div class="modal-body">
                    <center><img src="http://image.tmdb.org/t/p/w185/${this._movie.poster_path}"/></center>
                    <h3 align="center">${this._movie.title}</h3>
                    <p>${this._movie.overview}</p>
                </div>
            </div>
        </div>
    </div>`;

    const options = {
        'backdrop': 'true',
        'keyboard': 'true'
    };
    
    const movModal = document.querySelector("#movModal"+this._movie.id);
    // const trigg = document.querySelector("#toModal");

    // $(document).ready(function(){
    //     $(trigg).click(function(){
    //         $(movModal).modal({backdrop: "static"});
    //     })
    // });

    $(document).ready(function(){
        $(movModal).click(function(){
            $(movModal).modal(options);
        });
    });
    
    

    }
}
customElements.define("movie-item",MovieItem);
