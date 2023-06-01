import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { HomePage, ToolsPage, SkillsPage, ContactPage } from './pages';
import { ThemeProvider } from 'styled-components';
import { LightModeContextProvider, useLightModeContext } from './components';
import { darkTheme, lightTheme } from './libs/theme/theme';
import './i18n';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Error404Page from './pages/404';
import { ELightMode } from './constants';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <Error404Page />,
    children: [
      {
        path: '/portfolio',
        element: <HomePage />,
      },
    ],
  },
  {
    path: '/resume',
    element: <SkillsPage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
  {
    path: '/tools',
    element: <ToolsPage />,
  },
]);

const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
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
