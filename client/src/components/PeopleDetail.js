import React from 'react';
import { Header, Image, Grid, Segment } from 'semantic-ui-react'
import Rating from './Rating';

class PeopleDetail extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activePeople: null
    }
  }

  componentDidMount = () => {
    this.getPeopleDetail()
  }

  fetch = (endpoint) => {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }

  getPeopleDetail = () => {        
    this.fetch(`/api${this.props.location.pathname}`)
    .then(activePeople => {
      this.setState({activePeople})
      console.log(activePeople);
    })
  }

  render (){
    const peopleContainer = this.state.activePeople ?
      <Segment style={{ padding: '8em 0em' }} vertical>
        <Grid container verticalAlign='middle'>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as='h3' style={{ fontSize: '2em' }}>
                {this.state.activePeople.details.name}
              </Header>
              <div style={{ fontSize: '1.33em' }}>
                {this.state.activePeople.details.biography}
              </div>
              <div className="ui hidden divider"></div>
              <Grid.Row>
                <Grid.Column>
                  <div style={{ fontSize: '1.33em' }}>
                    <b>Known For: </b>{this.state.activePeople.details.known_for_department}
                  </div>
                </Grid.Column>
                <div className="ui hidden divider"></div>
                <Grid.Column>
                  <div style={{ fontSize: '1.33em' }}>
                    <b>Birthday: </b>{this.state.activePeople.details.birthday}
                  </div>
                </Grid.Column>
                <div className="ui hidden divider"></div>
                <Grid.Column>
                  <div style={{ fontSize: '1.33em' }}>
                    <b>Death: </b>{this.state.activePeople.details.deathday ? this.state.activePeople.details.deathday : "Still Living"}
                  </div>
                </Grid.Column>
                <div className="ui hidden divider"></div>
                <Grid.Column>
                  <div style={{ fontSize: '1.33em' }}>
                    <b>Place of Birth: </b>{this.state.activePeople.details.place_of_birth}
                  </div>
                </Grid.Column>
                <div className="ui hidden divider"></div>
                <Grid.Column>
                <div style={{ fontSize: '1.33em' }}>
                    <b>Popularity: </b>{this.state.activePeople.details.popularity}
                  </div>
                </Grid.Column>
              </Grid.Row>
            </Grid.Column>
            <Grid.Column floated='right' width={6}>
              <Image bordered rounded size='large' src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + this.state.activePeople.details.profile_path} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment> : "";

    return (
      <div>
        {peopleContainer}
      </div>
    );
  };
}

export default PeopleDetail;