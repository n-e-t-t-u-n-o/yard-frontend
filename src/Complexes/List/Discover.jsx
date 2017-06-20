import React from 'react';
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid';

const Discover = styled.section`
`;

const Wrapper = styled.div`
  font-family: "Fira Sans";
  display: flex;
  text-align: center;
  justify-content: center;
  padding: 4rem 0 4rem 0;
`;

const DiscoverTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #3e4247;
  line-height: 2.3125rem;
  margin: 0;
`;

const DiscoverText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #3e4247;
  margin: 0.5rem 0 1rem 0;
`;

const DiscoverButton = styled.button`
  border-radius: 2px;
  border: 0px;
  background-color: #000000;
  padding: 0.8125rem 2rem 0.8125rem 2rem;
  color: white;
  font-size: 1rem;
  line-height: 1;
  font-family: 'Fira Sans', sans-serif;
`;

export default () => {
  return (
    <Discover>
      <Wrapper>
        <Col lg={8}>
          <DiscoverTitle>Discover Our New Developments</DiscoverTitle>
          <DiscoverText>Compass brings a modern approach to new development marketing and sales. From boutique rental conversions to luxurious ground-up condominiums, browse our portfolio of current offerings.</DiscoverText>
          <DiscoverButton>Contact The Team</DiscoverButton>
        </Col>
      </Wrapper>
    </Discover>
  )
}
