import React from 'react';
import { Link } from 'react-router-dom';
import './MovieCard.css';

export default class MovieCard extends React.Component{
  render (){
    return (
      <div className="mdl-cell mdl-cell--4-col mdl-cell--7-col-tablet mdl-cell--7-col-phone mdl-card mdl-shadow--3dp movie-card__container">
        <div className="mdl-card__supporting-text movie-review-card__container">
          <Link to={`/movies/${this.props.id}`} >
            <img className="movie-review-card__container-image" src={this.props.photo} alt={'movie-poster'}/>
            <div className="mdl-typography--font-light mdl-typography--subhead">{this.props.title}</div>
          </Link>
            <div className="mdl-typography--font-light mdl-typography--subhead">{this.props.popularity}</div>
            <div className="mdl-typography--font-light mdl-typography--subhead">{this.props.release_date}</div>
            <div className="mdl-typography--font-light mdl-typography--subhead">{this.props.vote_average}</div>
            <div className="mdl-typography--font-light mdl-typography--subhead">{this.props.overview}</div>
            <div className="mdl-typography--font-light mdl-typography--subhead">{this.props.vote_count}</div>
            <div className="mdl-typography--font-light mdl-typography--subhead">{this.props.adult}</div>
        </div>
      </div>
    )
  }
}