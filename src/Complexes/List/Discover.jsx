import React from 'react';
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid';

const Discover = styled.div`
  margin-top: 3.5rem;
`;

const DiscoverWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const DiscoverTitle = styled.h2`
  margin: 0;
  text-align: center;
  font-family: "Fira Sans", sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  line-height: 1.5;
  color: #3e4247;
`;

const DiscoverText = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0;
  text-align: center;
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.4;
  color: #3e4247;
`;

const DiscoverButtonWrapper = styled.div`
  text-align: center;
  margin-top: 1rem;
`;

const DiscoverButton = styled.button`
  padding-top: 12px;
  padding-left: 2rem;
  padding-bottom: 12px;
  padding-right: 2rem;
  background-color: #000;
  color: #fff;
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  border-style: none;
  border-radius: 2px;
  line-height: 1;
`;

export default () => {
  return (
    <Discover>
      <Grid>
        <DiscoverWrapper>
          <Col lg={8}>
            <DiscoverTitle>Discover Our New Developments</DiscoverTitle>
            <DiscoverText>Compass brings a modern approach to new development marketing and sales. From boutique rental conversions to luxurious ground-up condominiums, browse our portfolio of current offerings.</DiscoverText>
            <DiscoverButtonWrapper>
              <DiscoverButton>Contact The Team</DiscoverButton>
            </DiscoverButtonWrapper>
          </Col>
        </DiscoverWrapper>
      </Grid>
    </Discover>
  )
}
