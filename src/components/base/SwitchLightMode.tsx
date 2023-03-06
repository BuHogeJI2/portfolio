import React from 'react';
import { useLightModeContext } from '../../libs/context/LightModeContext';
import Checkbox from './Checkbox';
import styled from 'styled-components';
import { isMobile } from 'react-device-detect';
import { useTranslation } from 'react-i18next';
import { ELightMode } from '../../libs/data/Constants';

const SwitcherWrapper = styled.div({
  position: 'absolute',
  top: isMobile ? '200px' : '230px',
  left: isMobile ? '7px' : '20px',
  zIndex: 1,
  transformOrigin: 'left',
  transform: 'rotate(-90deg)',
  textTransform: 'uppercase',
});

export default function SwitchLightMode(): React.ReactElement {
  const { mode, setLightMode } = useLightModeContext();
  const [t] = useTranslation();

  return (
    <SwitcherWrapper>
      <Checkbox
        value={ELightMode.DARK}
        checked={mode === ELightMode.DARK}
        onChange={setLightMode}
        content={<span>{t('lightMode.dark')}</span>}
      />
      <Checkbox
        value={ELightMode.LIGHT}
        checked={mode === ELightMode.LIGHT}
        onChange={setLightMode}
        content={<span>{t('lightMode.light')}</span>}
      />
    </SwitcherWrapper>
  );
}
