import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import '../styles/Search.css';


class Search extends React.Component {
  constructor(props){
    super(props);
  
    this.state = {
      term: '',
      autoCompleteResults: [],
      itemSelected: {},
      showItemSelected: false
    };
  }

    fetch = (endpoint) => {
      return new Promise((resolve, reject) => {
        window.fetch(endpoint)
        .then(response => response.json())
        .then(json => resolve(json))
        .catch(error => reject(error))
      })
    }
  
    getMovies = () => {
      this.fetch('api/search?q=' + this.state.term)
      .then(autoCompleteResults => {
        this.setState({ autoCompleteResults: autoCompleteResults})
        console.log(autoCompleteResults);
      }).catch(err => {
        console.log(err);
      })
    }

    getAutoCompleteResults = (e) => {
      this.setState({
        term: e.target.value
      }, () => {
        this.fetch('api/search?q=' + this.state.term)
          .then(response => this.setState({ autoCompleteResults: response }))
      });
    }

  render(){
    let autoCompleteList = this.state.autoCompleteResults.map((response, index) => {
      return <div key={index}>
        <Link to={`/movies/${response.id}`} >
        <img className="search__container-image" alt={"movie-poster"} src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + response.poster_path} />
          <div className="mdl-typography--font-light mdl-typography--subhead">{response.title}</div>
        </Link>
      </div>
    });

    return (
      <div>
        <input ref={ (input) => { this.searchBar = input } } value={ this.state.term } onChange={ this.getAutoCompleteResults.bind(this) } type='text' placeholder='Search...' />
        { autoCompleteList }
      </div>
    )
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Search />,
    document.body.appendChild(document.createElement('div')),
  )
});

export default Search;