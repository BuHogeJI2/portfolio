import { experience } from '@/components/pages/about/about-me.const';
import { projects } from '@/components/pages/projects/project.const';

export const homeProofItems = [
  {
    value: `${experience}+`,
    label: 'years shaping product interfaces',
    detail: 'Hands-on delivery across production-grade React frontends.',
  },
  {
    value: '10+',
    label: 'projects shipped',
    detail: 'Work spanning travel platforms, marketing sites, and booking UX.',
  },
  {
    value: 'Complex',
    label: 'search and booking flows',
    detail: 'Experience making dense product journeys feel calmer and clearer.',
  },
];

export const homeServiceCards = [
  {
    title: 'Interface implementation',
    description:
      'Turn product ideas, Figma files, or rough requirements into responsive interfaces that feel polished on day one.',
  },
  {
    title: 'Redesign and product polish',
    description:
      'Refine cluttered flows, improve hierarchy, and push the UI toward something people trust quickly.',
  },
  {
    title: 'Frontend architecture',
    description:
      'Structure complex frontends so teams can keep shipping without the UI turning brittle or slow to evolve.',
  },
  {
    title: 'Execution partnership',
    description:
      'Work closely with product, design, and engineering so the final experience feels intentional instead of assembled.',
  },
];

export const homeProcessSteps = [
  {
    title: 'Clarify the goal',
    description:
      'Start from the user journey, the business objective, and the points where the current experience loses trust.',
  },
  {
    title: 'Shape the interface',
    description:
      'Translate complexity into cleaner structure, better hierarchy, and UI that supports faster decisions.',
  },
  {
    title: 'Build with rigor',
    description:
      'Implement responsive, maintainable frontend code with enough system thinking to keep future work efficient.',
  },
  {
    title: 'Polish the details',
    description:
      'Refine motion, states, copy, and interaction quality so the product feels finished rather than merely functional.',
  },
];

const featuredSource = projects[0];

export const featuredWorkTeaser = {
  title: featuredSource.title,
  image: featuredSource.image,
  imageWidth: featuredSource.imageWidth,
  imageHeight: featuredSource.imageHeight,
  link: featuredSource.href,
  stack: featuredSource.technologies.slice(0, 4),
  role: featuredSource.role,
  summary: featuredSource.summary,
  value: featuredSource.value,
};
