import React from 'react';
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid';

import guidearrow from '../../img/arrow-blue.svg';
import yakimanka from '../../img/yakimanka.png';

const Area = styled.section`
  padding-top: 4rem;
  padding-bottom: 13.5rem;
  background-color: #3e4247;
`;

const Wrapper = styled.div`
  padding-top: 7.25rem;
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 3rem;
  padding-bottom: 0;
  font-family: 'Philosopher';
  font-size: 1.5rem;
  font-weight: bold;
  color: #a9afb6;
`;

const Text = styled.p`
  padding-right: 4rem;
  margin-bottom: 3.25rem;
  font-family: 'Philosopher';
  font-size: 3rem;
  font-weight: 700;
  line-height: 1.25;
  color: #ffffff;
`;

const Guide = styled.a`
  text-decoration: none;
  font-family: 'Fira Sans';
  font-size: 1rem;
  color: #00779a;
`;

const AreaImage = styled.img`
  width: 100%;
`;

export default () => {
  return (
    <Area>
      <Grid>
        <Row between="lg">

          <Col lg={6}>
            <Wrapper>
              <Title>Якиманка</Title>
              <Text>Исторический центр Москвы в двух километрах от Кремля</Text>
              <Guide href="">Гид по Якиманке&nbsp;<img src={guidearrow} alt="Гид по Якиманке"/></Guide>
            </Wrapper>
          </Col>

          <Col lg={6}>
            <AreaImage src={yakimanka} alt="Якиманка"/>
          </Col>

        </Row>
      </Grid>
    </Area>
  )
}
