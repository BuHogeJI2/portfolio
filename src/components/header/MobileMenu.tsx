import React, { useState } from 'react';
import { commonData } from '../../libs/data/common';
import {
  ELightMode,
  useLightModeContext,
} from '../../libs/context/LightModeContext';
import styled from 'styled-components';

const MobileMenuWrapper = styled.div({
  '.burger-button': {
    width: '25px',
    height: '25px',
  },
});

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
  const menuIcon = opened ? closeIcon : burgerIcon;

  return (
    <MobileMenuWrapper>
      <img
        className={'burger-button'}
        src={menuIcon}
        alt="burger-button"
        onClick={() => setOpened(!opened)}
      />
    </MobileMenuWrapper>
  );
}
