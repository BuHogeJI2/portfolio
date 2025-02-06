import { lazy, Suspense } from 'react';
import { type RouteObject } from 'react-router-dom';

const Home = lazy(() =>
  import('@/pages/index').then(mod => ({ default: mod.HomePage })),
);

const About = lazy(() =>
  import('@/pages/about').then(mod => ({ default: mod.AboutPage })),
);

const Skills = lazy(() =>
  import('@/pages/skills').then(mod => ({ default: mod.SkillsPage })),
);

const Experience = lazy(() =>
  import('@/pages/experience').then(mod => ({ default: mod.ExperiencePage })),
);

const Contact = lazy(() =>
  import('@/pages/contact').then(mod => ({ default: mod.ContactPage })),
);

const NotFound = lazy(() =>
  import('@/pages/404').then(mod => ({ default: mod.ErrorPage })),
);

export const routes: Array<RouteObject> = [
  {
    index: true,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: 'about',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <About />
      </Suspense>
    ),
  },
  {
    path: 'skills',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Skills />
      </Suspense>
    ),
  },
  {
    path: 'experience',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Experience />
      </Suspense>
    ),
  },
  {
    path: 'contact',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <Contact />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <NotFound />
      </Suspense>
    ),
  },
];

export default routes;
