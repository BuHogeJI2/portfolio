import React, { PropsWithChildren, useContext, useState } from 'react';
import noop from 'lodash/noop';
import useCookies from '../../../libs/hooks/useCookies';
import { ELightMode, lightModeCookieName } from '../../../constants';

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
  const { setCookie, getCookie } = useCookies();

  const lightModeFromCookie = getCookie(lightModeCookieName);
  const mappedLightModeFromCookie = lightModeFromCookie
    ? JSON.parse(lightModeFromCookie)
    : undefined;

  const [mode, setMode] = useState<ELightMode>(
    mappedLightModeFromCookie || ELightMode.DARK
  );

  function setLightMode(value: ELightMode) {
    setMode(value);
    setCookie(lightModeCookieName, JSON.stringify(value));
  }

  function handleOnChange(value: string) {
    switch (value) {
      case 'light':
        setLightMode(ELightMode.LIGHT);
        return;
      case 'dark':
        setLightMode(ELightMode.DARK);
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
