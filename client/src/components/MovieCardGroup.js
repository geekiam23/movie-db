import React from 'react';
import MovieCard from './MovieCard'
import './MovieCardGroup.css'

class MovieCardGroup extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      movies: [],
    }
    this.getMovies = this.getMovies.bind(this)
  }

  componentDidMount () {
    this.getMovies()
  }

  fetch(endpoint) {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }

  getMovies () {
    this.fetch('api/movies')
    .then(movies => {
      this.setState({movies})
      console.log(movies);
    })
  }

  render (){
    let movies =
    this.state.movies.map((movie) => {
      return  <MovieCard
                key={movie.id}
                title={movie.title}
                duration={movie.duration}
                director={movie.director}
                rating={movie.rating}
                description={movie.description}
                image_file_name={movie.poster_file_name}
                created_at={movie.created_at}
              />
    });
    return (
      <div className="movie-review-card-container mdl-grid">
        {movies}
      </div>
    );
  };
}

export default MovieCardGroup;