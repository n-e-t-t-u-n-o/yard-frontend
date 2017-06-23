import React from 'react';
import logo from './img/compass-logo.svg';
import footerarrow from './img/footer-arrow.svg';
import styled from 'styled-components'
import { Grid, Row, Col } from 'react-flexbox-grid';

const GlobalFooter = styled.footer`
  margin-top: 2rem;
  padding-top: 2rem;
  background-color: #111;
`;

const GlobalFooterTitle = styled.h4`
  margin-top: 0;
  margin-bottom: 1rem;
  font-size: 14px;
  font-weight: 700;
  line-height: 1;
  color: #646971;
`;

const GlobalFooterText = styled.p`
  margin-bottom: 0.25rem;
  font-size: 14px;
  font-weight: 300;
  line-height: 1;
  color: #a9afb6;
`;

const GlobalFooterTextLastItem = GlobalFooterText.extend`
  margin-top: 1.5rem;
`;

const GlobalFooterLine = styled.hr`
  margin-top: 0;
  margin-bottom: 1.25rem;
  width: 100%;
  height: 0.125rem;
  border-style: solid;
  background-color: #3e4247;
`;

const GlobalFooterNav = styled.nav``;

const GlobalFooterNavLink = styled.a`
  display: block;
  margin-bottom: 1rem;
  font-size: 14px;
  font-weight: 300;
  line-height: 1;
  text-decoration: none;
  color: #fff;
`;

const GlobalFooterNavLinkLastItem = GlobalFooterNavLink.extend`
  margin-top: 1.5rem;
`;

const GlobalFooterArrow = styled.img``;

const GlobalFooterDisclaimer = styled.p`
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
    <GlobalFooter>
      <Grid>
        <Row>
          <Col lg={4}>
            <GlobalFooterTitle>ООО &laquo;Ярд&raquo;</GlobalFooterTitle>
            <GlobalFooterText>ОГРН 1175074002531</GlobalFooterText>
            <GlobalFooterText>ИНН 5036165365</GlobalFooterText>
            <GlobalFooterTextLastItem>+7 (999) 821-14-88</GlobalFooterTextLastItem>
          </Col>

          <Col lg={4}>
            <GlobalFooterLine/>
            <GlobalFooterTitle>Жилые комплексы</GlobalFooterTitle>
            <GlobalFooterNav>
              <GlobalFooterNavLink href="" title="ВТБ Арена Парк">ВТБ Арена Парк</GlobalFooterNavLink>
              <GlobalFooterNavLink href="" title="Садовые кварталы">Садовые кварталы</GlobalFooterNavLink>
              <GlobalFooterNavLink href="" title="Резиденция Монэ">Резиденция Монэ</GlobalFooterNavLink>
              <GlobalFooterNavLinkLastItem href="">Все ЖК Москвы&nbsp;<GlobalFooterArrow src={footerarrow} alt="Все ЖК Москвы"/></GlobalFooterNavLinkLastItem>
            </GlobalFooterNav>
          </Col>

          <Col lg={4}>
            <GlobalFooterLine/>
            <GlobalFooterTitle>Компания</GlobalFooterTitle>
            <GlobalFooterNav>
              <GlobalFooterNavLink href="" title="Команда">Команда</GlobalFooterNavLink>
              <GlobalFooterNavLink href="" title="О компании">О компании</GlobalFooterNavLink>
            </GlobalFooterNav>
          </Col>
        </Row>

        <Row>
          <Col lgOffset={4} lg={8}>
            <GlobalFooterDisclaimer>Любая информация, представленная на данном сайте, носит исключительно информационный характер и ни при каких условиях не является публичной офертой, определяемой положениями статьи 437 ГК РФ. &copy; ООО &laquo;Ярд&raquo;, 2017</GlobalFooterDisclaimer>
          </Col>
        </Row>
      </Grid>
    </GlobalFooter>
  )
}
