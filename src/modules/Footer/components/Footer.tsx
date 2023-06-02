import React from 'react';
import Copyright from './Copyright';
import SocialLinks from './SocialLinks';
import styled from 'styled-components';

const FooterWrapper = styled.footer(({ theme }) => theme.footer);

export default function Footer(): React.ReactElement {
  return (
    <FooterWrapper>
      <Copyright />
      <SocialLinks />
    </FooterWrapper>
  );
}
