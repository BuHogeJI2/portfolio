import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';
import {
  LanguageSwitcher,
  Particles,
  SwitchLightMode,
} from '../../../components';
import { Header } from '../../Header';
import { Footer } from '../../Footer';

const Bg = styled.div(({ theme }) => theme.bg);
const Main = styled.main(({ theme }) => theme.main);
const Container = styled.div(({ theme }) => theme.container);

export default function Layout({
  children,
}: PropsWithChildren): React.ReactElement {
  return (
    <Bg>
      <Container>
        <Header />
        <Main>
          <Particles />
          <LanguageSwitcher />
          {children}
        </Main>
        <Footer />
        <SwitchLightMode />
      </Container>
    </Bg>
  );
}
