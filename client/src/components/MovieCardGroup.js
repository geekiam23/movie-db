import React from 'react';
import MovieCard from './MovieCard';
import '../styles/MovieCardGroup.css'

class MovieCardGroup extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      movies: [],
      search: ''
    }
  }

  componentDidMount = () => {
    this.getMovies()
  }

  fetch = (endpoint) => {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }

  getMovies = () => {
    this.fetch('api/movies/')
    .then(movies => {
      this.setState({movies})
      console.log(movies);
    }).catch(err => {
      console.log(err);
    })
  }

  render (){
    let movies = this.state.movies.map((movie) => {
        return <MovieCard
          key={movie.id}
          id={movie.id}
          title={movie.title}
          popularity={movie.popularity}
          release_date={movie.release_date}
          vote_average={movie.vote_average}
          overview={movie.overview}
          vote_count={movie.vote_count}
          adult={movie.adult}
          photo={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + movie.poster_path}
          created_at={movie.created_at}
        />
      });

    return (
      <div>
        <div className="mdl-grid">
          {movies}
        </div>
      </div>
    );
  };
}

export default MovieCardGroup;