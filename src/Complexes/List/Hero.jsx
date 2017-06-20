import React from 'react';
import heroimage from '../../img/compass-development-logo.svg';
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid';

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  background: #161616;
`;

const Hero = styled.div`
  margin: 0;
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

const HeroLogo = styled.img `
  margin: 0;
  padding: 0;
`;

export default () => {
  return (
    <Wrapper>
      <Hero>
        <HeroLogo src={heroimage} alt="Compass Development"/>
      </Hero>
    </Wrapper>
  )
}
