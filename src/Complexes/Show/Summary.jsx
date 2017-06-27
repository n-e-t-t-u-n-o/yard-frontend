import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Summary = styled.section`
  background: #fff;
  margin-bottom: 2rem;
`;

const SummaryTitle = styled.h2`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding-bottom: 0;
  font-family: 'Philosopher';
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #3e4247;
`;

const Wrapper = styled.div`
  margin-top: 1rem;
`;

const Unit = styled.dl`
  display: flex;
  margin-top: 0.5rem;
  margin-bottom: 0;
`;

const Title = styled.dd`
  margin-top: 0rem;
  margin-bottom: 0.25em;
  margin-left: 0;
  width: 50%;
  font-size: 1rem;
  color: #a9afb6;
  line-height: 1.56;
  width: 50%;
`;

const Amount = styled.dt`
  margin-top: 0rem;
  margin-bottom: 0.25rem;
  width: 50%;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.56;
  color: #3e4247;
`;

export default () => (
  <Summary>
    <Grid>
      <SummaryTitle>Характеристики:</SummaryTitle>
      <Wrapper>
        <Row>
          <Col lg={4}>
            <Unit>
              <Title>Количество квартир:</Title>
              <Amount>1 503</Amount>
            </Unit>
            <Unit>
              <Title>Статус:</Title>
              <Amount>Квартиры</Amount>
            </Unit>
            <Unit>
              <Title>Цены:</Title>
              <Amount>от 5.3 млн до 14.5 млн</Amount>
            </Unit>
          </Col>
          <Col lg={4}>
            <Unit>
              <Title>Количество квартир:</Title>
              <Amount>1 503</Amount>
            </Unit>
            <Unit>
              <Title>Количество квартир:</Title>
              <Amount>1 503</Amount>
            </Unit>
            <Unit>
              <Title>Количество квартир:</Title>
              <Amount>1 503</Amount>
            </Unit>
          </Col>
          <Col lg={4}>
            <Unit>
              <Title>Количество квартир:</Title>
              <Amount>1 503</Amount>
            </Unit>
            <Unit>
              <Title>Количество квартир:</Title>
              <Amount>1 503</Amount>
            </Unit>
            <Unit>
              <Title>Количество квартир:</Title>
              <Amount>1 503</Amount>
            </Unit>
          </Col>
        </Row>
      </Wrapper>
    </Grid>
  </Summary>
);
