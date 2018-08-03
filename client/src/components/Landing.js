import React from 'react';
import faker from 'faker';
import { Header, Grid, Segment } from 'semantic-ui-react'

const Landing = () => (
  <Segment style={{ padding: '8em 0em' }} vertical>
    <Grid container stackable verticalAlign='middle'>
      <Grid.Row>
        <Grid.Column width={8}>
          <Header as='h3' style={{ fontSize: '2em' }}>
            {faker.company.catchPhrase()}
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            {faker.lorem.paragraph()}
          </p>
          <Header as='h3' style={{ fontSize: '2em' }}>
            {faker.company.catchPhrase()}
          </Header>
          <p style={{ fontSize: '1.33em' }}>
            {faker.lorem.paragraph()}
          </p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default Landing;
