import React, { PropsWithChildren } from 'react';
import Container from './Container';
import styled from 'styled-components';

const Main = styled.main(({ theme }) => theme.main);

export default function Layout({
  children,
}: PropsWithChildren): React.ReactElement {
  return (
    <Container>
      <header>Header</header>
      <Main>{children}</Main>
      <footer>footer</footer>
    </Container>
  );
}
