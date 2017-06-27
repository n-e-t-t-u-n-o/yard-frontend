import React from 'react';
import styled from 'styled-components';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Description = styled.section`
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
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

const Text = styled.p`
  margin-top: 0.25rem;
  margin-bottom: 25px;
  font-size: 1rem;
  color: #3e4247;
  line-height: 25px;
`;

export default () => (
  <Description>
    <Grid>
      <Row>
        <Col lg={2}>
          <SummaryTitle>Описание</SummaryTitle>
        </Col>
        <Col lg={10}>
          <Text>
            ВТБ Арена Парк — современный квартал в 10 минутах езды от Кремля.
            Территория разделена на три зоны: жилой район, центральный стадион
            «Динамо» и большой спортивный парк.
          </Text>
          <Text>
            Жилой район — это 13 корпусов: апартаменты, штаб-квартира
            «Динамо», отель «Hyatt Regency Moscow» и четыре современных
            бизнес-центра. На территории — рестораны, спа-комплекс,
            фитнес-центр, химчистка, аптеки, магазины и отделения банков.
            В каждом корпусе работает консьерж и круглосуточная охрана.
            Для жителей оборудованы технические помещения под хранение
            колясок и велосипедов, комнаты для домашних животных и уютные
            вестибюли с мягкими креслами для встреч с друзьями и соседями.
          </Text>
          <Text>
            Сердце ВТБ Арена Парк — стадион. Под одной крышей расположились
            музей, торгово-развлекательный комплекс, подземная парковка для
            гостей и две крупные спортивные арены. Жизнь квартала сосредоточена
            в этой зоне: здесь можно сходить на концерт или фестиваль, поболеть
            за любимую команду и купить новую рубашку в торговом комплексе.
          </Text>
          <Text>
            Тихий жилой район от шумного стадиона отделяет Парк Физкультуры
            и Отдыха. Здесь каждый найдет занятие: для детей оборудованы
            игровые зоны, для подростков — спортивные площадки на открытом
            воздухе, для взрослых — велосипедные дорожки и зоны отдыха,
            где можно подышать свежим воздухом во время рабочего перерыва.
          </Text>
        </Col>
      </Row>
    </Grid>
  </Description>
);
