import React, { PropsWithChildren } from 'react';
import Container from './Container';
import styled from 'styled-components';
import HeaderContent from '../header/HeaderContent';
import ParticlesContainer from './Particles';
import LanguageSwitcher from '../header/LanguageSwitcher';
import Copyright from '../footer/Copyright';
import SocialLinks from '../footer/SocialLinks';
import SwitchLightMode from './SwitchLightMode';

const Bg = styled.div(({ theme }) => theme.bg);
const Main = styled.main(({ theme }) => theme.main);
const Header = styled.header(({ theme }) => theme.header);
const Footer = styled.footer(({ theme }) => theme.footer);

export default function Layout({
  children,
}: PropsWithChildren): React.ReactElement {
  return (
    <Bg>
      <Container>
        <Header>
          <HeaderContent />
        </Header>
        <Main>
          <ParticlesContainer />
          <LanguageSwitcher />
          {children}
        </Main>
        <Footer>
          <Copyright />
          <SocialLinks />
        </Footer>
        <SwitchLightMode />
      </Container>
    </Bg>
  );
}
