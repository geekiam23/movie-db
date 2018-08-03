import React from 'react';
import { Card, Header, Image, Grid, Segment, Container } from 'semantic-ui-react'
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
    })
  }

  render (){
    const movieCasts = this.state.activeMovie ? (
      this.state.activeMovie.cast.map((cast) => 
          <Card key={cast.id}>
            <Image src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2/" + cast.profile_path} alt="image" />
            <Card.Content>
              <Card.Header>{cast.name} as {cast.character}</Card.Header>
            </Card.Content>
          </Card>
      )
    ) : "";

    const movieReviews = this.state.activeMovie ? (
      this.state.activeMovie.results.map((review) => 
        <div key={review.id} className="ui comments centered">
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

    const movieContainer = this.state.activeMovie ?
    <Segment style={{ padding: '8em 0em' }} vertical>
      <Grid container verticalAlign='middle'>
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as='h3' style={{ fontSize: '2em' }}>
              {this.state.activeMovie.details.title}
            </Header>
            <div style={{ fontSize: '1.33em' }}>
              {this.state.activeMovie.details.overview}
            </div>
            <div className="ui hidden divider"></div>
            <Grid.Row>
              <Grid.Column>
                <div style={{ fontSize: '1.33em' }}>
                  <b>Genres: </b>{this.state.activeMovie.details.genres[0].name}
                </div>
              </Grid.Column>
              <div className="ui hidden divider"></div>
              <Grid.Column>
                <div style={{ fontSize: '1.33em' }}>
                  <b>Status: </b>{this.state.activeMovie.details.status}
                </div>
              </Grid.Column>
              <div className="ui hidden divider"></div>
              <Grid.Column>
                <div style={{ fontSize: '1.33em' }}>
                  <b>Release Date: </b>{this.state.activeMovie.details.release_date}
                </div>
              </Grid.Column>
              <div className="ui hidden divider"></div>
              <Grid.Column>
                <div style={{ fontSize: '1.33em' }}>
                  <b>Runtime: </b>{this.state.activeMovie.details.runtime}
                </div>
              </Grid.Column>
              <div className="ui hidden divider"></div>
              <Grid.Column>
                <div style={{ fontSize: '1.33em' }}>
                  <Rating max={10} votes={this.state.activeMovie.details.vote_average} />
                </div>
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
        <Container>
          <Card.Group centered itemsPerRow='six'>
            {movieCasts}
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
          {movieReviews}
          </Card.Group>
        </Container>
      </div>
    );
  };
}

export default MovieDetail;