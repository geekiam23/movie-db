import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react'
import Rating from './Rating';

const MovieCard = (props) => (
  <Card>
    <Link to={`/movies/${props.id}`} >
      <Image src={props.photo} />
    </Link>
      <Card.Content>
      <Link to={`/movies/${props.id}`} >
        <Card.Header>{props.title}</Card.Header>
      </Link>
        <Card.Description>{props.overview}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Rating max={10} votes={props.vote_average}/>
        <Card.Description><b>Release Date: </b>{props.release_date}</Card.Description>
    </Card.Content>
  </Card>
)

export default MovieCard;