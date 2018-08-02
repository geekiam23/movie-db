import React from 'react';
import '../styles/MovieDetail.css'

class MovieDetail extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeMovie: null,
      search: ''
    }
  }

  componentDidMount = () => {
    this.getMoviesDetail()
  }

  fetch = (endpoint) => {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }

  getMoviesDetail = () => {        
    this.fetch(`/api${this.props.location.pathname}`)
    .then(activeMovie => {
      this.setState({activeMovie})
      console.log(this.state.activeMovie);
    })
  }

  render (){
    const movieCasts = this.state.activeMovie ? (
      <div>
        Casts:
        <ul className="casts">
          {this.state.activeMovie.cast.map((cast, index) => 
            <li key={index}>
              {<img className="movie-review-card__container-image" alt={"movie-poster"} src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + cast.profile_path} />}
              {cast.name}: {cast.character}
            </li>)}
        </ul>
      </div>
    ) : "";

    const movieContainer = this.state.activeMovie ?
    <div>
      <img className="movie-review-card__container-image" alt={"movie-poster"} src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + this.state.activeMovie.details.poster_path} />
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeMovie.details.title}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeMovie.details.tagline}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeMovie.details.synopsis}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeMovie.details.genres[0].name}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeMovie.details.status}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeMovie.details.runtime}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeMovie.details.revenue}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeMovie.details.adult}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeMovie.details.budget}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeMovie.details.overview}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeMovie.details.rating}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeMovie.details.release_date}</div>
      <img className="movie-review-card__container-image" alt={"movie-poster"} src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + this.state.activeMovie.details.belongs_to_collection.poster_path} />
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeMovie.details.belongs_to_collection.name}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead"><a href={this.state.activeMovie.details.homepage}>Homepage</a></div>
    </div> : "";

    return (
      <div>
        {movieContainer}
        {movieCasts}
      </div>
    );
  };
}

export default MovieDetail;