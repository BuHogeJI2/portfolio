import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import HomePage from './pages';
import { ThemeProvider } from 'styled-components';
import InfoPage from './pages/info';
import LightModeContextProvider, {
  ELightMode,
  useLightModeContext,
} from './libs/context/LightModeContext';
import { darkTheme, lightTheme } from './theme/theme';
import SwitchLightMode from './components/base/SwitchLightMode';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/info" element={<InfoPage />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <LightModeContextProvider>
      <Initial />
    </LightModeContextProvider>
  </React.StrictMode>
);

function Initial(): React.ReactElement {
  const { mode } = useLightModeContext();

  return (
    <ThemeProvider theme={mode === ELightMode.LIGHT ? lightTheme : darkTheme}>
      <SwitchLightMode />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
