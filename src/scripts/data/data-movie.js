
class DataMovie {
    static searchMov(keyword) {
        return fetch(`https://api.themoviedb.org/3/search/multi?api_key=8bb4ed2c9577dbd754635bae6c2ca0d9&language=en-US&query=${keyword}&page=1&include_adult=false`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.results) {
                return Promise.resolve(responseJson.results);
            } else {
                return Promise.reject(`${keyword} Not Found`); 
            }
        })
    }
}
export default DataMovie;

