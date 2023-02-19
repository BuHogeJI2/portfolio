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
import SkillsPage from './pages/skills';
import LightModeContextProvider, {
  ELightMode,
  useLightModeContext,
} from './libs/context/LightModeContext';
import { darkTheme, lightTheme } from './libs/theme/theme';
import ContactsPage from './pages/contacts';
import './i18n';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/skills" element={<SkillsPage />} />
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
