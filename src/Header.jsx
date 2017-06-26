import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

import logo from './img/compass-logo.svg';

const Header = styled.header`
  display: flex;
  background-color: #fff;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  margin: 0;
`;

const Nav = styled.nav`
  display: flex;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;
`;

const NavLink = styled.a`
  margin-left: 2rem;
  font-size: 1rem;
  text-decoration: none;
  line-height: 1;
  color: #3e4247;
`;

export default () => (
  <Header>
    <Grid>
      <Wrapper>
        <Logo src={logo} />
        <Nav>
          <NavLink href="" title="Buy">Buy</NavLink>
          <NavLink href="" title="Rent">Rent</NavLink>
          <NavLink href="" title="Our Agents">Our Agents</NavLink>
        </Nav>
      </Wrapper>
    </Grid>
  </Header>
);
