import React from 'react';
import { isMobile } from 'react-device-detect';
import styled from 'styled-components';
import MenuItems from './MenuItems';
import MobileMenu from './MobileMenu';

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
