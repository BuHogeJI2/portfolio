import React, { PropsWithChildren } from 'react';
import Container from './Container';
import styled from 'styled-components';
import ParticlesContainer from './Particles';
import LanguageSwitcher from '../header/LanguageSwitcher';
import Copyright from '../footer/Copyright';
import SocialLinks from '../footer/SocialLinks';
import SwitchLightMode from './SwitchLightMode';
import Hero from '../header/Hero';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import HeaderMenu from '../header/HeaderMenu';

const Bg = styled.div(({ theme }) => theme.bg);
const Main = styled.main(({ theme }) => theme.main);
const Header = styled.header(({ theme }) => theme.header);
const Footer = styled.footer(({ theme }) => theme.footer);

export default function Layout({
  children,
}: PropsWithChildren): React.ReactElement {
  const navigate = useNavigate();
  const [t] = useTranslation();

  function handleOnHeroClick() {
    navigate('/');
  }

  return (
    <Bg>
      <Container>
        <Header>
          <Hero
            title={t('name')}
            subTitle={t('job.title')}
            image={'/portfolio/images/me.jpg'}
            onClick={handleOnHeroClick}
          />
          <HeaderMenu />
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
