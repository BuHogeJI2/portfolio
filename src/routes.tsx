import { lazy, Suspense } from 'react';
import { type RouteObject } from 'react-router-dom';
import { Loader } from './components/base/loader/loader';

const Home = lazy(() =>
  import('@/pages/index').then(mod => ({ default: mod.HomePage })),
);

const About = lazy(() =>
  import('@/pages/about').then(mod => ({ default: mod.AboutPage })),
);

const Skills = lazy(() =>
  import('@/pages/skills').then(mod => ({ default: mod.SkillsPage })),
);

const Projects = lazy(() =>
  import('@/pages/projects').then(mod => ({ default: mod.ProjectsPage })),
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
      <Suspense fallback={<Loader />}>
        <Home />
      </Suspense>
    ),
  },
  {
    path: 'about',
    element: (
      <Suspense fallback={<Loader />}>
        <About />
      </Suspense>
    ),
  },
  {
    path: 'skills',
    element: (
      <Suspense fallback={<Loader />}>
        <Skills />
      </Suspense>
    ),
  },
  {
    path: 'projects',
    element: (
      <Suspense fallback={<Loader />}>
        <Projects />
      </Suspense>
    ),
  },
  {
    path: 'experience',
    element: (
      <Suspense fallback={<Loader />}>
        <Experience />
      </Suspense>
    ),
  },
  {
    path: 'contact',
    element: (
      <Suspense fallback={<Loader />}>
        <Contact />
      </Suspense>
    ),
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<Loader />}>
        <NotFound />
      </Suspense>
    ),
  },
];

export default routes;
