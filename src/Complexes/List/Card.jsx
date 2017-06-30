import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import image from '../../img/bitmap1.jpg';

const Card = styled(Link)`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 3rem;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &:hover {
    box-shadow: 0px 0px 20px 0px rgba(0,0,0,0.3);
  }
`;

const Image = styled.img`
  flex-shrink: 0;
  width: 484px;
  height: 350px;
`;

const Description = styled.div`
  padding-top: 1.5rem;
  padding-left: 1rem;
  padding-bottom: 1.5rem;
  padding-right: 1rem;
  width: auto;
  border-bottom-color: #646971;
  border-bottom-width: 0.125rem;
  border-bottom-style: solid;
  text-decoration: none;
  background-color: #fff;
`;

const Area = styled.p`
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  font-family: Monaco, Consolas, 'Lucida Console', monospace;
  text-transform: uppercase;
  color: #646971;
`;

const Title = styled.h3`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
  font-weight: 700;
  color: #000;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #3e4247;
`;

export default props => (
  <Card to={`/complex/${props.id}`} title="">
    <Image src={image} alt="" />
    <Description>
      <Area>{props.area}</Area>
      <Title>{props.title}</Title>
      <Text>{props.children}</Text>
    </Description>
  </Card>
);
