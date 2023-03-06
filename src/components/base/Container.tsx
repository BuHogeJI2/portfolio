import React, { PropsWithChildren } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div(({ theme }) => theme.container);

export default function Container({
  children,
}: PropsWithChildren): React.ReactElement {
  return <Wrapper>{children}</Wrapper>;
}
