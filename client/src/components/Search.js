import React from 'react';
import { Link } from 'react-router-dom';
import { Input } from 'semantic-ui-react'
import { Card, Image, Grid } from 'semantic-ui-react'

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
      this.fetch('/search?q=' + this.state.term)
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
        this.fetch('/search?q=' + this.state.term)
          .then(response => this.setState({ autoCompleteResults: response.results }))
      });
    }

  render(){
    let autoCompleteList = this.state.autoCompleteResults ? 
      this.state.autoCompleteResults.map((response, index) => {
        console.log(response);
        if (!response.name){
          return <Card>
                  <Link to={`/movies/${response.id}`} >
                    <Card.Content>
                      <Image floated='right' size='mini' src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + response.poster_path} />
                      <Card.Header>{response.title}</Card.Header>
                    </Card.Content>
                  </Link>
                </Card>
        } else{
          return <Card>
                  <Link to={`/tv/${response.id}`} >
                    <Card.Content>
                      <Image floated='right' size='mini' src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + response.poster_path} />
                      <Card.Header>{response.name}</Card.Header>
                    </Card.Content>
                  </Link>
                </Card>
        }
      }) : "";

    return (
      <Grid style={{zIndex: '10'}}>
        <Grid.Column>          
          <Input ref={ (input) => { this.searchBar = input } } value={ this.state.term } onChange={ this.getAutoCompleteResults.bind(this) } type='text' placeholder='Search...' />
          { autoCompleteList }
        </Grid.Column>
      </Grid>
    )
  }
}

export default Search;
