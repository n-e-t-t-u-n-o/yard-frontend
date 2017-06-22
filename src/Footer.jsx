import React from 'react';
import logo from './img/compass-logo.svg';
import footerarrow from './img/footer-arrow.svg';
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid';

const Footer = styled.footer`
  margin-top: 2rem;
  padding-top: 2rem;
  background-color: #111;
`;

const Title = styled.h4`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  color: #646971;
`;

const Text = styled.p`
  margin-bottom: 0.25rem;
  font-size: 14px;
  font-weight: 300;
  line-height: 1;
  color: #a9afb6;
`;

const TextLastItem = Text.extend`
  margin-top: 1.5rem;
`;

const Line = styled.hr`
  margin-top: 0;
  margin-bottom: 1.25rem;
  width: 100%;
  height: 0.125rem;
  border-style: solid;
  background-color: #3e4247;
`;

const Nav = styled.nav``;

const NavLink = styled.a`
  display: block;
  margin-bottom: 1rem;
  font-size: 14px;
  font-weight: 300;
  line-height: 1;
  text-decoration: none;
  color: #fff;
`;

const NavLinkLastItem = NavLink.extend`
  margin-top: 1.5rem;
`;

const Arrow = styled.img``;

const Disclaimer = styled.p`
  margin-top: 5rem;
  margin-bottom: 2rem;
  padding: 0;
  font-size: 11px;
  font-weight: 300;
  line-height: 1.6;
  color: #a9afb6;
`;

export default () => {
  return (
    <Footer>
      <Grid>
        <Row>
          <Col lg={4}>
            <Title>ООО &laquo;Ярд&raquo;</Title>
            <Text>ОГРН 1175074002531</Text>
            <Text>ИНН 5036165365</Text>
            <TextLastItem>+7 (999) 821-14-88</TextLastItem>
          </Col>

          <Col lg={2}>
            <Line/>
            <Title>Жилые комплексы</Title>
            <Nav>
              <NavLink href="" title="ВТБ Арена Парк">ВТБ Арена Парк</NavLink>
              <NavLink href="" title="Садовые кварталы">Садовые кварталы</NavLink>
              <NavLink href="" title="Резиденция Монэ">Резиденция Монэ</NavLink>
              <NavLinkLastItem href="">Все ЖК Москвы&nbsp;<Arrow src={footerarrow} alt="Все ЖК Москвы"/></NavLinkLastItem>
            </Nav>
          </Col>

          <Col lg={2}>
            <Line/>
            <Title>Компания</Title>
            <Nav>
              <NavLink href="" title="Команда">Команда</NavLink>
              <NavLink href="" title="О компании">О компании</NavLink>
            </Nav>
          </Col>
        </Row>

        <Row>
          <Col lgOffset={4} lg={8}>
            <Disclaimer>Любая информация, представленная на данном сайте, носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями статьи 437 ГК РФ. &copy; ООО &laquo;Ярд&raquo;, 2017</Disclaimer>
          </Col>
        </Row>
      </Grid>
    </Footer>
  )
}
