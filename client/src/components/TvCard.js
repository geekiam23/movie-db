import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/MovieCard.css';

const TvCard = (props) => (
  <div className="mdl-cell mdl-cell--4-col mdl-cell--7-col-tablet mdl-cell--7-col-phone mdl-card mdl-shadow--3dp movie-card__container">
    <div className="mdl-card__supporting-text movie-review-card__container">
      <Link to={`/tv/${props.id}`} >
        <img className="movie-review-card__container-image" src={props.photo} alt={'movie-poster'}/>
        <div className="mdl-typography--font-light mdl-typography--subhead">{props.name}</div>
      </Link>
        <div className="mdl-typography--font-light mdl-typography--subhead">{props.popularity}</div>
        <div className="mdl-typography--font-light mdl-typography--subhead">{props.first_air_date}</div>
        <div className="mdl-typography--font-light mdl-typography--subhead">{props.vote_average}</div>
        <div className="mdl-typography--font-light mdl-typography--subhead">{props.overview}</div>
        <div className="mdl-typography--font-light mdl-typography--subhead">{props.vote_count}</div>
    </div>
  </div>
)

export default TvCard;
