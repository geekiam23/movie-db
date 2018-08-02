import React from 'react';
import { Card, Header, Image, Grid, Segment } from 'semantic-ui-react'
import Rating from './Rating';

class MovieDetail extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      activeMovie: null,
      search: ''
    }
  }

  componentDidMount = () => {
    this.getMoviesDetail()
  }

  fetch = (endpoint) => {
    return new Promise((resolve, reject) => {
      window.fetch(endpoint)
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => reject(error))
    })
  }

  getMoviesDetail = () => {        
    this.fetch(`/api${this.props.location.pathname}`)
    .then(activeMovie => {
      this.setState({activeMovie})
      console.log(this.state.activeMovie);
    })
  }

  render (){
    const movieCasts = this.state.activeMovie ? (
      this.state.activeMovie.cast.map((cast, index) => 
          <Card>
            <Image src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + cast.profile_path} alt="image" />
            <Card.Content>
              <Card.Header>{cast.name} as {cast.character}</Card.Header>
            </Card.Content>
          </Card>
      )
    ) : "";

    const movieReviews = this.state.activeMovie.results ? (
      this.state.activeMovie.results.map((review, index) => 
          <Card>
            <Card.Content>
              <Card.Header>{review.author}</Card.Header>
              <Card.Header>{review.content}</Card.Header>
            </Card.Content>
          </Card>
        ) 
    ) : "";

    const movieContainer = this.state.activeMovie ?
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              {this.state.activeMovie.details.title}
            </Header>
            <p style={{ fontSize: '1.33em' }}>
              {this.state.activeMovie.details.overview}
            </p>
            <Grid.Row>
              <Grid.Column>
                <p style={{ fontSize: '1.33em' }}>
                  <b>Genres: </b>{this.state.activeMovie.details.genres[0].name}
                </p>
              </Grid.Column>
              <Grid.Column>
                <p style={{ fontSize: '1.33em' }}>
                  <b>Status: </b>{this.state.activeMovie.details.status}
                </p>
              </Grid.Column>
              <Grid.Column>
                <p style={{ fontSize: '1.33em' }}>
                  <b>Release Date: </b>{this.state.activeMovie.details.release_date}
                </p>
              </Grid.Column>
              <Grid.Column>
                <p style={{ fontSize: '1.33em' }}>
                  <b>Runtime: </b>{this.state.activeMovie.details.runtime}
                </p>
              </Grid.Column>
              <Grid.Column>
                <p style={{ fontSize: '1.33em' }}>
                  <b>User Score: </b><Rating max={10} votes={this.state.activeMovie.details.vote_average} />
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid.Column>
          <Grid.Column floated='right' width={6}>
            <Image bordered rounded size='large' src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + this.state.activeMovie.details.poster_path} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment> : "";

    return (
      <div>
        {movieContainer}
        <Header textAlign='center' as='h3' style={{ fontSize: '2em' }}>
          Casts:
        </Header>
        <Card.Group centered>
          {movieCasts}
        </Card.Group>
        <hr/>
        <Header textAlign='center' as='h3' style={{ fontSize: '2em' }}>
          Reviews:
        </Header>
        <Card.Group centered>
          {movieReviews}
        </Card.Group>
      </div>
    );
  };
}

export default MovieDetail;