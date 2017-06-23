import React from 'react';
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid';
import BodyClassName from 'react-body-classname';
import { Helmet } from "react-helmet";

import ComplexTitle from './ComplexTitle';
import Gallery from './Gallery';

const CardsList = styled.section`
  margin-top: 4rem;
  padding-bottom: 1rem;
`;

export default () =>
  (
    <BodyClassName className="complex">
      <div>
        <ComplexTitle/>
        <Gallery/>
      </div>
    </BodyClassName>
  )
