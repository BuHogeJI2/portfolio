import React from 'react';
import { isMobile } from 'react-device-detect';
import MobileMenu from './MobileMenu';
import MenuItems from './MenuItems';
import styled from 'styled-components';

const DesktopMenuItems = styled(MenuItems)({
  '.menu-link': {
    '&:not(:last-child)': {
      marginRight: '15px',
    },
  },
});

export default function HeaderMenu(): React.ReactElement {
  return <>{isMobile ? <MobileMenu /> : <DesktopMenuItems />}</>;
}
