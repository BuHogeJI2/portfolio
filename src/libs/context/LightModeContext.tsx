import React, { PropsWithChildren, useContext, useState } from 'react';
import noop from 'lodash/noop';

export enum ELightMode {
  LIGHT,
  DARK,
}

type TLightModeContext = {
  mode: ELightMode;
  setLightMode(nextMode: ELightMode): void;
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
  const [mode, setMode] = useState<ELightMode>(ELightMode.LIGHT);

  const ctx: TLightModeContext = {
    mode,
    setLightMode: setMode,
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
