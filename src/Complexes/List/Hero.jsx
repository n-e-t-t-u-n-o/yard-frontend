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
  padding: 5rem 0 5rem 0;
`;

const HeroLogo = styled.img ``;

export default () => {
  return (
    <Wrapper>
      <Hero>
        <HeroLogo src={heroimage} alt="Compass Development"/>
      </Hero>
    </Wrapper>
  )
}
