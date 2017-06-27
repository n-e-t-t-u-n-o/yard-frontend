import React from 'react';
import styled from 'styled-components';
import { Grid } from 'react-flexbox-grid';

const Features = styled.section``;

const Wrapper = styled.div`
  display: flex;
  margin-right: 3rem;
  margin-bottom: 2.25rem;
  padding-top: 1rem;
  border-bottom: 1px solid #e0e0e1;
`;

const Unit = styled.div`
  margin-right: 3rem;
  margin-bottom: 1rem;
  padding-bottom: 0.25rem;
`;

const Title = styled.h2`
  margin-top: 0.5rem;
  margin-bottom: 0.5rem;
  padding-bottom: 0;
  font-family: 'Philosopher';
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1;
  color: #3e4247;
`;

const Subtitle = styled.small`
  display: block;
  padding-top: 1rem;
  margin-bottom: 0.5rem;
  font-family: 'Fira Sans';
  font-size: 14px;
  font-weight: 300;
  color: #a9afb6;
  line-height: 1;
`;

export default () => (
  <Features>
    <Grid>
      <Wrapper>

        <Unit>
          <Title>
            950
            <Subtitle>предложений</Subtitle>
          </Title>
        </Unit>

        <Unit>
          <Title>
            John McAslan + Partners
            <Subtitle>архитектор</Subtitle>
          </Title>
        </Unit>

        <Unit>
          <Title>
            Группа «ПСН»
            <Subtitle>застройщик</Subtitle>
          </Title>
        </Unit>

      </Wrapper>
    </Grid>
  </Features>
);
