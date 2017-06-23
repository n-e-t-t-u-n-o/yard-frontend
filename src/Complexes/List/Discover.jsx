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

const Text = styled.p`
  margin-top: 0.5rem;
  margin-bottom: 0;
  text-align: center;
  font-family: "Fira Sans", sans-serif;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.4;
  color: #3e4247;
`;

const ButtonWrapper = styled.div`
  margin-top: 1rem;
  text-align: center;
`;

const Button = styled.button`
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
            <Title> Our New Developments</Title>
            <Text>Compass brings a modern approach to new development marketing and sales. From boutique rental conversions to luxurious ground-up condominiums, browse our portfolio of current offerings.</Text>
            <ButtonWrapper>
              <Button>Contact The Team</Button>
            </ButtonWrapper>
          </Col>
        </Wrapper>
      </Grid>
    </Discover>
  )
};
