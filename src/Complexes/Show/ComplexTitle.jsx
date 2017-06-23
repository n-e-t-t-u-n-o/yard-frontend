import React from 'react';
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid';

const Header = styled.section`
  padding-top: 1.5rem;
  padding-bottom: 0.5rem;
  border-top: 1px solid #eaebf0;
  background-color: #fff;
`;

const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 1rem;
  font-family: Philosopher;
  font-size: 2rem;
  font-weight: bold;
  line-height: 1;
  color: #3e4247;
`;

const Subtitle = styled.p`
  display: block;
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-family: 'Fira Sans';
  font-size: 14px;
  font-weight: 300;
  color: #a9afb6;
  line-height: 1.2;
`;

const Favorite = styled.div``;

const AddToFav - styled.button`
  margin-right: 0.5rem;
  padding-top: 0.5rem;
  padding-left: 1rem;
  padding-bottom: 0.5rem;
  padding-right: 1rem;
  border: 1px solid #e0e0e1;
  border-radius: 0.125rem;
  font-family: 'Fira Sans';
  font-size: 10px;
  font-weight: 300;
  line-height: 1;
  color: #00779a;
  background: none;
  cursor: pointer;
`;

export default () => {
  return (
    <Header>
      <Grid>
        <Row between={lg}>
          <Col>
            <Title>Жилой комплекс &laquo;Полянка/44&raquo;</Title>
            <Subtitle>Район Якиманка, улица Большая Полянка, дом 44 &middot; 119180</Subtitle>
          </Col>
          <Favorite>
            <AddToFav>В избранное</AddToFav>
          </Favorite>
        </Row>
      </Grid>
    </Header>
  )
}
