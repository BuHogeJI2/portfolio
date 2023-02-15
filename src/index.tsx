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
import { darkTheme, lightTheme } from './libs/theme/theme';
import './i18n';
import ContactsPage from './pages/contacts';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/info" element={<InfoPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
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
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
