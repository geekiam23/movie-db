import React from 'react';
import './MovieDetail.css'

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
    this.fetch(`${this.props.location.pathname}`)
    .then(activeMovie => {
      this.setState({activeMovie: activeMovie.table})
      console.log(this.state.activeMovie.casts);
    })
  }

  render (){
    const movieCasts = this.state.activeMovie ? (
      <div>
        Casts:
        <ul className="casts">
          {this.state.activeMovie.casts.map((cast, index) => <li key={index}>{cast}</li>)}
        </ul>
      </div>
    ) : "";

    const movieContainer = this.state.activeMovie ?
    <div>
      <img className="movie-review-card__container-image" alt={"movie-poster"} src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + this.state.activeMovie.poster_path} />
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeMovie.title}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeMovie.tagline}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeMovie.synopsis}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeMovie.status}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeMovie.runtime}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeMovie.revenue}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeMovie.adult}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeMovie.budget}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeMovie.genres}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeMovie.overview}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeMovie.rating}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeMovie.release_date}</div>
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