import React from 'react';
import TvCard from './TvCard';
import { Card } from 'semantic-ui-react'

class TvCardGroup extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      tv: [],
      search: ''
    }
  }

  componentDidMount = () => {
    this.getTv()
  }

  fetch = (endpoint) => {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }

  getTv = () => {
    this.fetch('api/tv/')
      .then(tv => {
        this.setState({tv})
        console.log(tv);
      }).catch(err => {
        console.log(err);
      })
  }

  render (){
    let tv = this.state.tv.map((tv) => {
      return <TvCard
        key={tv.id}
        id={tv.id}
        name={tv.name}
        popularity={tv.popularity}
        first_air_date={tv.first_air_date}
        vote_average={tv.vote_average}
        overview={tv.overview}
        vote_count={tv.vote_count}
        photo={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + tv.poster_path}
      />
    });

    return (
      <Card.Group centered >
        {tv}
      </Card.Group >
    );
  };
}

export default TvCardGroup;