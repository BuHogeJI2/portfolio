import React, { PropsWithChildren } from 'react';
import Container from './Container';
import styled from 'styled-components';
import HeaderContent from '../header/HeaderContent';
import ParticlesContainer from './Particles';
import LanguageSwitcher from '../header/LanguageSwitcher';

const Main = styled.main(({ theme }) => theme.main);
const Header = styled.header(({ theme }) => theme.header);

export default function Layout({
  children,
}: PropsWithChildren): React.ReactElement {
  return (
    <Container>
      <Header>
        <HeaderContent />
        <LanguageSwitcher />
      </Header>
      <Main>
        <ParticlesContainer />
        {children}
      </Main>
      <footer>footer</footer>
    </Container>
  );
}
