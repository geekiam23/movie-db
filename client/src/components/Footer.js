import React, { Component } from 'react';
import './Footer.css';


export default class Footer extends Component {
  render() {
    return (
      <div id="movie-review-footer">
        <footer className="movie-review-footer mdl-mega-footer">
          <div className="mdl-mega-footer--top-section">
            <div className="mdl-mega-footer--right-section">
              <a className="mdl-typography--font-light" href="#top">
                Back to Top
                <i className="material-icons">expand_less</i>
              </a>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}