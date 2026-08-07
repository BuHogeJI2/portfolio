export type TAboutHighlight = {
  label: string;
  title: string;
  description: string;
};

export type TAboutStrength = {
  title: string;
  description: string;
};

export const yearOfBeginning = 2020;
export const experience = new Date().getFullYear() - yearOfBeginning;

export const aboutHighlights: TAboutHighlight[] = [
  {
    label: '2020',
    title: 'Frontend career begins',
    description:
      'Started building production web interfaces and developing a strong foundation in React, TypeScript, and responsive design.',
  },
  {
    label: 'Travel products',
    title: 'Complex search and booking systems',
    description:
      'Worked with interactive maps, advanced filters, and multi-step booking experiences where clarity is essential.',
  },
  {
    label: 'Today',
    title: 'Product-focused frontend partnership',
    description:
      'Bring engineering depth and product judgement together to shape interfaces that are useful, maintainable, and polished.',
  },
];

export const aboutStrengths: TAboutStrength[] = [
  {
    title: 'Complex product UI',
    description:
      'Structure dense workflows and information so people can move through them with confidence.',
  },
  {
    title: 'Frontend systems',
    description:
      'Create reusable components and clear patterns that help teams build consistently over time.',
  },
  {
    title: 'Collaborative delivery',
    description:
      'Work closely with product, design, and engineering partners from early decisions through final polish.',
  },
];
