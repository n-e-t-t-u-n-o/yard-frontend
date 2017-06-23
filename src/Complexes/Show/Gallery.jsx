import React from 'react';
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid';

import image1 from '../../img/bitmap4.jpg';
import image2 from '../../img/bitmap5.jpg';
import image3 from '../../img/bitmap6.jpg';
import image4 from '../../img/bitmap7.jpg';
import image5 from '../../img/bitmap8.jpg';

const Gallery = styled.section``;

const Images = styled.div`
  display: flex;
  overflow-x: auto;
  white-space: nowrap;
`;

const GalleryImage = styled.img`
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
        <GalleryImage src={image1} alt=""/>
        <GalleryImage src={image2} alt=""/>
        <GalleryImage src={image3} alt=""/>
        <GalleryImage src={image4} alt=""/>
        <GalleryImage src={image5} alt=""/>
        <GalleryImage src={image1} alt=""/>
        <GalleryImage src={image2} alt=""/>
        <GalleryImage src={image3} alt=""/>
        <GalleryImage src={image4} alt=""/>
        <GalleryImage src={image5} alt=""/>
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
