import "../components/nav-bar.js";
import "../components/movie-list.js";
import DataMovie from "../data/data-movie.js";

const main = () => {
    const searchElement = document.querySelector("nav-bar");
    const movieListElement = document.querySelector("movie-list");


    // const onButtonSearchClicked = () => {
    //     DataMovie.searchMov(searchElement.value)
    //         .then(renderResult)
    //         .catch(fallbackResult)
    // };

    const onButtonSearchClicked = async () => {
        try {
          const result = await DataMovie.searchMov(searchElement.value);
          renderResult(result);
        } catch (message) {
          fallbackResult(message);
        }
      };

    const renderResult = results => {
        movieListElement.movies = results;
    };

    const fallbackResult = message => {
        movieListElement.renderError(message);
    };

    searchElement.clickEvent = onButtonSearchClicked;
};
export default main;