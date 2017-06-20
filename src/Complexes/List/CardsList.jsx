import React from 'react';
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Card from './Card'

import CardImage1 from '../../img/bitmap1.jpg';
import CardImage2 from '../../img/bitmap2.jpg';
import CardImage3 from '../../img/bitmap3.jpg';

const Cards = styled.section`
  margin-top: 4rem;
  padding-bottom: 1rem;
`;

export default () => {
  return (
    <Cards>
      <Grid>
        <Card id={1}
          imageSrc={CardImage1}
          imageAlt="764 Metropolitan Avenue"
          area="South Beach, San Francisco"
          title="764 Metropolitan Avenue"
          text="Beautifully appointed residences perched atop Rincon Hill, The Harrison offers unparalleled Bay Bridge and city views within steps of San Francisco’s greatest restaurants, shops, and The Embarcadero." />

        <Card id={2}
          imageSrc={CardImage2}
          imageAlt="100 East 53rd Stree"
          area="Midtown East, Manhattan"
          title="100 East 53rd Stree"
          text="One Hundred East Fifty Third Street by Foster + Partners is a limited collection of modern residences in Midtown Manhattan's Cultural District. The 94 residences ranging from alcove lofts to four bedrooms within the 63-story tower are generously proportioned." />

        <Card id={3}
          imageSrc={CardImage3}
          imageAlt="152 Elizabeth"
          area="Nolita, Manhattan"
          title="152 Elizabeth"
          text="152 Elizabeth is an ultra-luxury condominium building—the first in New York City designed by Japanese master architect Tadao Ando. Located at the corner of Kenmare and Elizabeth Streets in Nolita, the 32,000-square-foot building will stand as a profound architectural statement and embrace the industrial character of the neighborhood." />
      </Grid>
    </Cards>
  )
}
