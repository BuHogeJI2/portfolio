import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import routes from '@/routes';
import App from '@/app';
import { Loader } from '@/components/base/loader/loader';
import { ThemeProvider } from '@/contexts/theme-context';
import { RouteErrorPage } from '@/pages/route-error';
import '@/global';

const container = document.getElementById('root') as HTMLElement;

const root = createRoot(container);

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: routes,
    errorElement: <RouteErrorPage />,
  },
]);

root.render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={router} fallbackElement={<Loader />} />
    </ThemeProvider>
  </StrictMode>,
);
