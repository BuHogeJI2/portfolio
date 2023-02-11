import React from 'react';
import {
  ELightMode,
  useLightModeContext,
} from '../libs/context/LightModeContext';

export default function SwitchLightMode(): React.ReactElement {
  const { setLightMode } = useLightModeContext();

  return (
    <div>
      <button onClick={() => setLightMode(ELightMode.LIGHT)}>light</button>
      <button onClick={() => setLightMode(ELightMode.DARK)}>dark</button>
    </div>
  );
}
