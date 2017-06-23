import React from 'react';
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid';

import image from '../../img/bitmap1.jpg';

const Gallery = styled.section``;

const Images = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
`;

const GallryImage = styled.img`
  height: 400px;
`;

const ButtonWrapper = styled.div`
  position: absolute;
  margin-top: -2.625rem;
  margin-bottom: 0.5rem;
  margin-left: 0.5rem;
`;

const ViewAll = styled.button`
  padding-top: 0.5rem;
  padding-left: 1rem;
  padding-bottom: 0.5rem;
  padding-right: 1rem;
  border-radius: 0.25rem;
  border: 0;
  background-color: #00779a;
  font-family: 'Fira Sans';
  font-size: 10px;
  font-weight: 300;
  line-height: 1;
  color: #fff;
  cursor: pointer;
`;

export default () => {
  return (
    <Gallery>
      <Images>
        <GalleryImage src={image} alt=""/>
      </Images>
      <Grid>
        <Row>
          <ButtonWrapper>
            <ViewAll>41 фотография</ViewAll>
          </ButtonWrapper>
        </Row>
      </Grid>
    </Gallery>
  )
}
