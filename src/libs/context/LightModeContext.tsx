import React, { PropsWithChildren, useContext, useState } from 'react';
import noop from 'lodash/noop';

export enum ELightMode {
  LIGHT = 'light',
  DARK = 'dark',
}

type TLightModeContext = {
  mode: ELightMode;
  setLightMode(nextMode: string): void;
};

const defaultContextValue: TLightModeContext = {
  mode: ELightMode.LIGHT,
  setLightMode: noop,
};

const LightModeContext =
  React.createContext<TLightModeContext>(defaultContextValue);

export default function LightModeContextProvider({
  children,
}: PropsWithChildren): React.ReactElement {
  const [mode, setMode] = useState<ELightMode>(ELightMode.DARK);

  function handleOnChange(value: string) {
    switch (value) {
      case 'light':
        setMode(ELightMode.LIGHT);
        return;
      case 'dark':
        setMode(ELightMode.DARK);
        return;
      default:
        return;
    }
  }

  const ctx: TLightModeContext = {
    mode,
    setLightMode: handleOnChange,
  };

  return (
    <LightModeContext.Provider value={ctx}>
      {children}
    </LightModeContext.Provider>
  );
}

export function useLightModeContext() {
  return useContext(LightModeContext);
}
