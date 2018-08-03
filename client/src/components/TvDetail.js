import React from 'react';
import { Card, Header, Image, Grid, Segment, Container } from 'semantic-ui-react'
import Rating from './Rating';

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
    })
  }

  render (){
    const tvCasts = this.state.activeTv ? (
      this.state.activeTv.cast.map((cast) => 
          <Card key={cast.id}>
            <Image src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + cast.profile_path} alt="image" />
            <Card.Content>
              <Card.Header>{cast.name} as {cast.character}</Card.Header>
            </Card.Content>
          </Card>
        ) 
    ) : "";

    const tvReviews = this.state.activeTv ? (
      this.state.activeTv.results.map((review) => 
      <div key={review.id} className="ui comments">
        <div className="comment">
          <div className="content">
            <a className="author">{review.author}</a>
            <div className="text">
              <p>{review.content}</p>
            </div>
          </div>
        </div>
      </div>
        ) 
    ) : "";

    const tvContainer = this.state.activeTv ?
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              {this.state.activeTv.details.name}
            </Header>
            <div style={{ fontSize: '1.33em' }}>
              {this.state.activeTv.details.overview}
            </div>
            <Grid.Row>
              <Grid.Column>
                <div style={{ fontSize: '1.33em' }}>
                  <b>Genres: </b>{this.state.activeTv.details.genres[0].name}
                </div>
              </Grid.Column>
              <div className="ui hidden divider"></div>
              <Grid.Column>
                <div style={{ fontSize: '1.33em' }}>
                  <b>Status: </b>{this.state.activeTv.details.status}
                </div>
              </Grid.Column>
              <div className="ui hidden divider"></div>
              <Grid.Column>
                <div style={{ fontSize: '1.33em' }}>
                  <b>First Air Date: </b>{this.state.activeTv.details.first_air_date}
                </div>
              </Grid.Column>
              <div className="ui hidden divider"></div>
              <Grid.Column>
                <div style={{ fontSize: '1.33em' }}>
                  <b>Homepage: </b><a href={this.state.activeTv.details.homepage}>Homepage</a>
                </div>
              </Grid.Column>
              <div className="ui hidden divider"></div>
              <Grid.Column>
                <div style={{ fontSize: '1.33em' }}>
                  <b># of Episodes: </b>{this.state.activeTv.details.number_of_episodes}
                </div>
              </Grid.Column>
              <div className="ui hidden divider"></div>
              <Grid.Column>
                <div style={{ fontSize: '1.33em' }}>
                  <b># of Seasons: </b>{this.state.activeTv.details.number_of_seasons}
                </div>
              </Grid.Column>
              <div className="ui hidden divider"></div>
              <Grid.Column>
                <div style={{ fontSize: '1.33em' }}>
                  <b>Type: </b>{this.state.activeTv.details.type}
                </div>
              </Grid.Column>
              <div className="ui hidden divider"></div>
              <Grid.Column>
                <div style={{ fontSize: '1.33em' }}>
                  <Rating max={10} votes={this.state.activeTv.details.vote_average} />
                </div>
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
          <div className="ui hidden divider"></div>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + this.state.activeTv.details.poster_path} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment> : "";

    return (
      <div>
        {tvContainer}
        <Header textAlign='center' as='h3' style={{ fontSize: '2em' }}>
          Casts:
        </Header>
        <Container>
          <Card.Group centered itemsPerRow='six'>
            {tvCasts}
          </Card.Group>
        </Container>
        <div className="ui hidden divider"></div>
        <div className="ui divider"></div>
        <Header textAlign='center' as='h3' style={{ fontSize: '2em' }}>
          Reviews:
        </Header>
        <div className="ui hidden divider"></div>
        <Container>
          <Card.Group centered>
            {tvReviews}
          </Card.Group>
        </Container>
      </div>
    );
  };
}

export default TvDetail;

