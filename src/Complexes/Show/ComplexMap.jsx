import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

import mapimage from '../../img/googlemap.png';

const ComplexMap = styled.section`
  margin-top: -9.75rem;
  padding-bottom: 1.75rem;
`;

const MapImage = styled.img`
  width: 100%;
  height: 306px;
  box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.5);
`;

const List = styled.div`
  box-shadow: 0px 0px 30px 0px rgba(0,0,0,0.5);
`;

const Item = styled.div`
  padding-top: 1.5rem;
  padding-left: 1.5rem;
  padding-bottom: 1.5rem;
  background-color: #fff;
  border-bottom: solid 1px #e0e0e1;
`;

const LastItem = styled.div`
  padding-top: 1.5rem;
  padding-left: 1.5rem;
  padding-bottom: 27px;
  background-color: #fff;
`;

const Title = styled.p`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.38;
  color: #3e4247;
`;

const Text = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  font-size: 1rem;
  line-height: 1.38;
  color: #a9afb6;
`;

export default () => (
  <ComplexMap>
    <Grid>
      <Row>

        <Col lg={6}>
          <MapImage src={mapimage} alt="" />
        </Col>

        <Col lg={6}>
          <List>
            <Item>
              <Title>Красный октябрь</Title>
              <Text>24 минуты, 6 км</Text>
            </Item>
            <Item>
              <Title>World class</Title>
              <Text>2 минуты, 300 м</Text>
            </Item>
            <LastItem>
              <Title>Третьяковская галерея</Title>
              <Text>14 минуты, 4 км</Text>
            </LastItem>
          </List>
        </Col>

      </Row>
    </Grid>
  </ComplexMap>
);
