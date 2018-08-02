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
    this.getTvDetail()
  }

  fetch = (endpoint) => {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }

  getTvDetail = () => {
    this.fetch(`/api${this.props.location.pathname}`)
    .then(activeTv => {
      this.setState({activeTv})
      console.log(this.state.activeTv);
    })
  }

  render (){
    const tvCasts = this.state.activeTv ? (
      <div>
        Casts:
        <ul className="casts">
          {this.state.activeTv.cast.map((cast, index) => 
            <li key={index}>
              {<img className="movie-review-card__container-image" alt={"movie-poster"} src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + cast.profile_path} />}
              {cast.name}: {cast.character}
            </li>)} 
        </ul>
      </div>
    ) : "";

    const tvContainer = this.state.activeTv ?
    <div>
      <img className="movie-review-card__container-image" alt={"movie-poster"} src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + this.state.activeTv.details.poster_path} />
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeTv.details.name}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeTv.details.synopsis}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeTv.details.genres[0].name}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeTv.details.overview}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeTv.details.status}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeTv.details.first_air_date}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead"><a href={this.state.activeTv.details.homepage}>Homepage</a></div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeTv.details.in_production}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeTv.details.number_of_episodes}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeTv.details.number_of_seasons}</div>
      <div className="mdl-typography--font-light mdl-typography--subhead">{this.state.activeTv.details.type}</div>
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