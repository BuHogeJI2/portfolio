import { lazy, Suspense } from 'react';
import { type RouteObject } from 'react-router-dom';

const Index = lazy(() =>
  import('@/pages/index').then(mod => ({ default: mod.HomePage })),
);
const Notfound = lazy(() =>
  import('@/pages/404').then(mod => ({ default: mod.ErrorPage })),
);

export const routes: Array<RouteObject> = [
  {
    index: true,
    element: (
      <Suspense>
        <Index />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: (
      <Suspense>
        <Notfound />
      </Suspense>
    ),
  },
];

export default routes;
