import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react'
import Rating from './Rating';

const TvCard = (props) => (
  <Card>
    <Link to={`/tv/${props.id}`} >
      <Image src={props.photo} />
    </Link>
      <Card.Content>
      <Link to={`/tv/${props.id}`} >
        <Card.Header>{props.name}</Card.Header>
      </Link>
        <Card.Description>{props.overview}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Rating votes={props.vote_average} max={10}/>
        <Card.Description><b>Release Date: </b>{props.first_air_date}</Card.Description>
    </Card.Content>
  </Card>
)

export default TvCard;
