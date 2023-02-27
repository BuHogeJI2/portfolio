import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages';
import { ThemeProvider } from 'styled-components';
import SkillsPage from './pages/skills';
import LightModeContextProvider, {
  useLightModeContext,
} from './libs/context/LightModeContext';
import { darkTheme, lightTheme } from './libs/theme/theme';
import ToolsPage from './pages/tools';
import './i18n';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Error404Page from './pages/404';
import { ELightMode } from './libs/data/Constants';

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomePage />,
    errorElement: <Error404Page />,
  },
  {
    path: '/skills',
    element: <SkillsPage />,
  },
  {
    path: '/tools',
    element: <ToolsPage />,
  },
]);

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
