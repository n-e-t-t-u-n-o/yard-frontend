import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Infrastructure = styled.section`
  padding-bottom: 3.5rem;
`;

const Wrapper = styled.div`
  padding-top: 2rem;
  border-top: 1px solid #e0e0e1;
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 1rem;
  padding-bottom: 0;
  font-family: 'Philosopher';
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.12;
  color: #3e4247;
`;

const Units = styled.div`
  margin-top: 0.25rem;
`;

const Unit = styled.p`
  margin-top: 0;
  margin-bottom: 0.5rem;
  line-height: 1.38;
  color: #3e4247;
`;

export default () => (
  <Infrastructure>
    <Grid>
      <Wrapper>
        <Title>Инфраструктура</Title>
        <Units>
          <Row>
            <Col lg={2}>
              <Unit>Бассейн</Unit>
            </Col>
            <Col lg={2}>
              <Unit>Детский сад</Unit>
            </Col>
            <Col lg={2}>
              <Unit>Частная школа</Unit>
            </Col>
            <Col lg={2}>
              <Unit>Бассейн</Unit>
            </Col>
            <Col lg={2}>
              <Unit>Детский сад</Unit>
            </Col>
            <Col lg={2}>
              <Unit>Частная школа</Unit>
            </Col>
            <Col lg={2}>
              <Unit>Частная школа</Unit>
            </Col>
            <Col lg={2}>
              <Unit>Частная школа</Unit>
            </Col>
            <Col lg={2}>
              <Unit>Частная школа</Unit>
            </Col>
          </Row>
        </Units>
      </Wrapper>
    </Grid>
  </Infrastructure>
);
