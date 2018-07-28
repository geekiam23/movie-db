import React from 'react';
import './MovieCard.css';

export default class MovieCard extends React.Component{
  render (){
    return (
      <div className="mdl-cell mdl-cell--7-col mdl-cell--7-col-tablet mdl-cell--7-col-phone mdl-card mdl-shadow--3dp movie-card__container">
        <div className="mdl-card__media">
          <img alt=""/>
        </div>
        <div className="mdl-card__supporting-text">
          <div className="mdl-typography--font-light mdl-typography--subhead">{this.props.title}</div>
          <div className="mdl-typography--font-light mdl-typography--subhead">{this.props.duration}</div>
          <div className="mdl-typography--font-light mdl-typography--subhead">{this.props.director}</div>
          <div className="mdl-typography--font-light mdl-typography--subhead">{this.props.rating}</div>
          <div className="mdl-typography--font-light mdl-typography--subhead">{this.props.description}</div>
          <div className="mdl-typography--font-light mdl-typography--subhead">{this.props.poster_file_name}</div>
        </div>
      </div>
    )
  }
}