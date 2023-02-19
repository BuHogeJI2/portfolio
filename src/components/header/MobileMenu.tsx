import React, { useState } from 'react';
import { commonData } from '../../libs/data/common';
import {
  ELightMode,
  useLightModeContext,
} from '../../libs/context/LightModeContext';
import styled from 'styled-components';
import MenuItems from './MenuItems';

const MobileMenuWrapper = styled.div({
  '.burger-button': {
    width: '25px',
    height: '25px',
  },
});

const MobileMenuOverlayWrapper = styled.div(
  ({ theme }) => theme.menu.mobileOverlay,
  ({ theme: { colors } }) => ({
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    zIndex: 2,
    '.burger-button': {
      position: 'absolute',
      right: '20px',
      top: '10px',
      width: '25px',
      height: '25px',
    },
  })
);

export default function MobileMenu(): React.ReactElement {
  const { mode } = useLightModeContext();

  const burgerIcon =
    mode === ELightMode.LIGHT
      ? commonData.menuIcons.burgerDark
      : commonData.menuIcons.burgerLight;

  const closeIcon =
    mode === ELightMode.LIGHT
      ? commonData.menuIcons.closeDark
      : commonData.menuIcons.closeLight;

  const [opened, setOpened] = useState<boolean>(false);

  return (
    <MobileMenuWrapper>
      <img
        className={'burger-button'}
        src={burgerIcon}
        alt="burger-button"
        onClick={() => setOpened(true)}
      />
      {opened ? (
        <MobileMenuOverlay icon={closeIcon} onClose={() => setOpened(false)} />
      ) : null}
    </MobileMenuWrapper>
  );
}

const MenuItemsWrapper = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

const MobileMenuItems = styled(MenuItems)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  '.menu-link': {
    '&:not(:last-child)': {
      marginBottom: '55px',
    },
  },
});

interface IMobileMenuOverlayProps {
  icon: string;
  onClose(): void;
}

function MobileMenuOverlay({
  icon,
  onClose,
}: IMobileMenuOverlayProps): React.ReactElement {
  return (
    <MobileMenuOverlayWrapper>
      <img
        className={'burger-button'}
        src={icon}
        alt="burger-button"
        onClick={onClose}
      />
      <MenuItemsWrapper>
        <MobileMenuItems />
      </MenuItemsWrapper>
    </MobileMenuOverlayWrapper>
  );
}
