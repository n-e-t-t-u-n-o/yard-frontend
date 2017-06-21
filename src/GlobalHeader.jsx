import React from 'react';
import logo from './img/compass-logo.svg';
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'react-router-dom';

const GlobalHeader = styled.header`
  display: flex;
  background-color: #fff;
`;

const InnerPageHeader = GlobalHeader.extend`
  border-bottom: 1px solid #eaebf0;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GlobalHeaderLogo = styled.img`
  margin: 0;
`

const HeaderNav = styled.nav`
  display: flex;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

const HeaderNavLink = styled.a`
  margin-left: 2rem;
  font-size: 1rem;
  text-decoration: none;
  line-height: 1;
  color: #3e4247;
`;

export default () => {
  return (
    <GlobalHeader>
      <Grid>
        <Wrapper>
          <GlobalHeaderLogo src={logo} />
          <HeaderNav>
            <HeaderNavLink href="" title="Buy">Buy</HeaderNavLink>
            <HeaderNavLink href="" title="Rent">Rent</HeaderNavLink>
            <HeaderNavLink href="" title="Our Agents">Our Agents</HeaderNavLink>
          </HeaderNav>
        </Wrapper>
      </Grid>
    </GlobalHeader>
  )
}
