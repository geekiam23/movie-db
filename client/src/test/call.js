import facilities from './movieExample.json';

const gettingMovies = {
  getMovies: function() {
    return new Promise(function (resolve, reject) {
      resolve(facilities);
    })
  }
}


export default gettingMovies;