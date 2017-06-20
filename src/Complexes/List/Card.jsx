import React from 'react';
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid';

const Card = styled.a`
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

const CardImage = styled.img`
  flex-shrink: 0;
  width: 484px;
  height: 350px;
`;

const CardDescription = styled.div`
  padding-top: 1.5rem;
  padding-left: 1rem;
  padding-bottom: 1.5rem;
  padding-right: 1rem;
  border-bottom-color: #646971;
  border-bottom-width: 0.125rem;
  border-bottom-style: solid;
  text-decoration: none;
  background-color: #fff;
`;

const CardArea = styled.p`
  margin-top: 0;
  margin-bottom: 1.5rem;
  font-size: 1rem;
  font-family: Monaco, Consolas, 'Lucida Console', monospace;
  text-transform: uppercase;
  color: #646971;
`;

const CardTitle = styled.h3`
  margin-top: 0;
  margin-bottom: 0.5rem;
  font-size: 2.5rem;
  font-weight: 700;
  color: #000;
`;

const CardText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  color: #3e4247;
`;

export default (props) => {
  return (
    <Card to={`/Complexes/List/${props.id}`} href="" title="">
      <CardImage src={props.imageSrc} alt={props.imageAlt} />
      <CardDescription>
        <CardArea>{props.area}</CardArea>
        <CardTitle>{props.title}</CardTitle>
        <CardText>{props.text}</CardText>
      </CardDescription>
    </Card>
  )
}
