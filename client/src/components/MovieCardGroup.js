import React from 'react';
import MovieCard from './MovieCard';
import Input from '@material-ui/core/Input';
import './MovieCardGroup.css'

class MovieCardGroup extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      movies: [],
      search: ''
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
    this.fetch('api/movies/')
    .then(movies => {
      this.setState({movies})
      console.log(movies);
    })
  }

  updateSearch(event) {
    this.setState({search: event.target.value.substr(0 ,20)});
  }

  render (){
    let filteredMovies = this.state.movies.filter(
      (movie) => {
        return movie.title.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
    );

    return (
      <div>
        <div id="top" >
          <div className="mdl-layout__header-row">
            <Input
              className="movie-review__search-bar"
              placeholder="Search Here!"
              value={this.state.search}
              onChange={this.updateSearch.bind(this)}
              inputProps={{
                'aria-label': 'Description',
              }}
            />
          </div>
        </div>
        <div className="mdl-grid">
          {filteredMovies.map((movie) => {
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
          })}
        </div>
      </div>
    );
  };
}

export default MovieCardGroup;