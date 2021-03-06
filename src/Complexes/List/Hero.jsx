import React from 'react';
import styled from 'styled-components';

import heroimage from '../../img/compass-development-logo.svg';

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

const Logo = styled.img`
  margin: 0;
  padding: 0;
`;

export default () => (
  <Wrapper>
    <Hero>
      <Logo src={heroimage} alt="Compass Development" />
    </Hero>
  </Wrapper>
);
