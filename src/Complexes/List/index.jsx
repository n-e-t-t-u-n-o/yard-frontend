import React, { Component } from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';
import BodyClassName from 'react-body-classname';

import Hero from './Hero';
import Discover from './Discover';
import Card from './Card';

const CardsList = styled.section`
  margin-top: 4rem;
  padding-bottom: 1rem;
`;

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    return fetch('https://api.jqestate.ru/v1/complexes?filter[state]=public')
      .then(response => response.json())
      .then((responseJson) => {
        const complexes = responseJson.items;
        console.log(complexes);
        this.setState({ complexes });
      });
  }

  render() {
    const { complexes = [] } = this.state;
    return (
      <BodyClassName className="complexes">
        <div>
          <Hero />
          <Discover />
          <CardsList>
            <Grid>
              {complexes.map(complex => (
                <Card
                  key={complex.id}
                  id={complex.id}
                  area={`${complex.location.subLocalityName}, ${complex.location.street}`}
                  title={`${complex.name}`}
                />
              ))}

            </Grid>
          </CardsList>
        </div>
      </BodyClassName>
    );
  }
}

export default List;
