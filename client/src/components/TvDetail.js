import React from 'react';
import '../styles/MovieDetail.css'

class TvDetail extends React.Component{
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
    .then(activeTv => {
      this.setState({activeTv: activeTv.table})
      console.log(this.state.activeTv.casts);
    })
  }

  render (){
    const tvCasts = this.state.activeTv ? (
      <div>
        Casts:
        <ul className="casts">
          {this.state.activeTv.casts.map((cast, index) => <li key={index}>{cast}</li>)}
        </ul>
      </div>
    ) : "";

    const tvContainer = this.state.activeTv ?
    <div>
      <img className="movie-review-card__container-image" alt={"movie-poster"} src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + this.state.activeTv.poster_path} />
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeTv.title}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeTv.tagline}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeTv.synopsis}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeTv.status}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeTv.runtime}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeTv.revenue}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeTv.adult}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeTv.budget}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeTv.genres}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeTv.overview}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeTv.rating}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeTv.release_date}</div>
    </div> : "";

    return (
      <div>
        {tvContainer}
        {tvCasts}
      </div>
    );
  };
}

export default TvDetail;