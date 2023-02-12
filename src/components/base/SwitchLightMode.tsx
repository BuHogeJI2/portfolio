import React from 'react';
import {
  ELightMode,
  useLightModeContext,
} from '../../libs/context/LightModeContext';
import Checkbox from './Checkbox';
import styled from 'styled-components';

const SwitcherWrapper = styled.div({
  position: 'absolute',
  top: '180px',
  left: '30px',
  zIndex: 1,
  transformOrigin: 'left',
  transform: 'rotate(-90deg)',
});

export default function SwitchLightMode(): React.ReactElement {
  const { mode, setLightMode } = useLightModeContext();

  return (
    <SwitcherWrapper>
      <Checkbox
        value={ELightMode.DARK}
        checked={mode === ELightMode.DARK}
        onChange={setLightMode}
        content={<span>DARK</span>}
      />
      <Checkbox
        value={ELightMode.LIGHT}
        checked={mode === ELightMode.LIGHT}
        onChange={setLightMode}
        content={<span>LIGHT</span>}
      />
    </SwitcherWrapper>
  );
}
