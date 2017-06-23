import React from 'react';
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid';

const Discover = styled.div`
  margin-top: 3.5rem;
`;

const Wrapper = styled.div`
  display: flex;
  padding-top: 4rem;
  padding-left: 0;
  padding-right: 0;
  text-align: center;
  justify-content: center;
`;

const Title = styled.h2`
  margin: 0;
  text-align: center;
  font-family: "Fira Sans", sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.5;
  color: #3e4247;
`;

const DiscoverText = styled.p`
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
  padding: 0;
  font-size: 1rem;
  line-height: 1.4;
`;

const DiscoverButton = styled.button`
  padding-top: 12px;
  padding-left: 2rem;
  padding-bottom: 12px;
  padding-right: 2rem;
  border: 0;
  border-radius: 0.125rem;
  font-family: 'Fira Sans', sans-serif;
  background-color: #000;
  color: #fff;
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  border-style: none;
  border-radius: 2px;
  line-height: 1;
  background-color: #000;
  color: #fff;
  cursor: pointer;
`;

export default () => {
  return (
    <Discover>
      <Grid>
        <Wrapper>
          <Col lg={8}>
            <DiscoverTitle>Discover Our New Developments</DiscoverTitle>
            <DiscoverText>Compass brings a modern approach to new development marketing and sales. From boutique rental conversions to luxurious ground-up condominiums, browse our portfolio of current offerings.</DiscoverText>
            <DiscoverButton>Contact The Team</DiscoverButton>
          </Col>
        </Wrapper>
      </Grid>
    </Discover>
  )
}
