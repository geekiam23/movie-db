import React from 'react';
import PeopleCard from './PeopleCard';
import { Card } from 'semantic-ui-react'

class PeopleCardGroup extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      people: []
    }
  }

  componentDidMount = () => {
    return this.getPeople();
  }

  fetch = (endpoint) => {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }

  getPeople = () => {
    return this.fetch('api/people/')
    .then(people => {
      this.setState({people})
    }).catch(err => {
      console.log(err);
    })
  }

  render (){
    let people = this.state.people.map((people) => {
        return <PeopleCard
          key={people.name + people.id}
          id={people.id}
          title={people.name}
          popularity={people.popularity}
          release_date={people.release_date}
          vote_average={people.vote_average}
          overview={people.overview}
          vote_count={people.vote_count}
          adult={people.adult}
          photo={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + people.profile_path}
          created_at={people.created_at}
        />
      });

    return (
      <Card.Group centered >
        {people}
      </Card.Group >
    );
  };
}

export default PeopleCardGroup;