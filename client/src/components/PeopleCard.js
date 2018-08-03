import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Image } from 'semantic-ui-react'

const PeopleCard = (props) => (
  <Card>
    <Link to={`/people/${props.id}`} >
      <Image src={props.photo} />
    </Link>
      <Card.Content>
      <Link to={`/people/${props.id}`} >
        <Card.Header>{props.title}</Card.Header>
      </Link>
      </Card.Content>
  </Card>
)

export default PeopleCard;