import React from 'react';
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid';
import BodyClassName from 'react-body-classname';

import ComplexTitle from './ComplexTitle';
import Gallery from './Gallery';
import Features from './Features';
import Summary from './Summary';
import Description from './Description';
import Infrastructure from './Infrastructure'
import OfferCard from './OfferCard';
import Area from './Area'
import ComplexMap from './ComplexMap'

const OfferCards = styled.section`
  padding-top: 3.75rem;
  padding-bottom: 4rem;
  background-color: #f4f5f9;
`;

const OffersTitle = styled.h2`
  margin-bottom: 1.5rem;
  font-family: 'Philosopher';
  font-size: 1.5rem;
  font-weight: 700;
  color: #3e4247;
`;

export default () =>
  (
    <BodyClassName className="complex">
      <div>
        <ComplexTitle/>
        <Gallery/>
        <Features/>
        <Summary/>
        <Description/>
        <Infrastructure/>

        <OfferCards>
          <Grid>
            <Row center="lg">
             <OffersTitle>Предложения в ЖК &laquo;Полянка/44&raquo;</OffersTitle>
            </Row>
            <Row>
              <Col lg={4}><OfferCard id={1}/></Col>
              <Col lg={4}><OfferCard id={2}/></Col>
              <Col lg={4}><OfferCard id={3}/></Col>
            </Row>
          </Grid>
        </OfferCards>

        <Area/>
        <ComplexMap/>

      </div>
    </BodyClassName>
  );
