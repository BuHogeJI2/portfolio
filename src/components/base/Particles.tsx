import React from 'react';
import { loadFull } from 'tsparticles';
import Particles from 'react-tsparticles';
import {
  ELightMode,
  useLightModeContext,
} from '../../libs/context/LightModeContext';
import styled from 'styled-components';

const ParticlesWrapper = styled(Particles)({
  position: 'absolute',
  zIndex: 2,
});

export default function ParticlesContainer(): React.ReactElement {
  const { mode } = useLightModeContext();
  const particleColor = mode === ELightMode.LIGHT ? '#000' : '#fff';

  return (
    <ParticlesWrapper
      id="particles-here"
      init={loadFull}
      options={{
        background: {
          color: {
            value: 'transparent',
          },
        },
        fpsLimit: 120,
        particles: {
          color: {
            value: particleColor,
          },
          move: {
            direction: 'right',
            enable: true,
            outModes: {
              default: 'out',
            },
            random: false,
            speed: 1,
            straight: true,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 70,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: 'circle',
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}
