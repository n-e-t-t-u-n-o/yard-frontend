import React from 'react';
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid';
import BodyClassName from 'react-body-classname';
import { Helmet } from "react-helmet";

import Hero from './Hero';
import Discover from './Discover';
import Card from './Card';

const CardsList = styled.section`
  margin-top: 4rem;
  padding-bottom: 1rem;
`;

export default () =>
  (
    <BodyClassName className="complexes">
      <div>
        <Hero/>
        <Discover/>
        <CardsList>
          <Grid>
            <Card id={1} area="South Beach, San Francisco" title="The Harrison"/>
            <Card id={2} area="Midtown East, Manhattan" title="100 East 53rd Street"/>
            <Card id={3} area="Nolita, Manhattan" title="152 Elizabeth"/>
          </Grid>
        </CardsList>
      </div>
    </BodyClassName>
  )
