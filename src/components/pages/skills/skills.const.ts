export type TTechnology = {
  name: string;
  icon: string;
};

export type TCapabilityGroup = {
  id: string;
  title: string;
  summary: string;
  strengths: string[];
  technologies: TTechnology[];
  secondary?: boolean;
};

export const capabilityGroups: TCapabilityGroup[] = [
  {
    id: 'product-interface-engineering',
    title: 'Product interface engineering',
    summary:
      'Building responsive, accessible interfaces that make complex product workflows feel clear and intentional.',
    strengths: [
      'Responsive product UI for real-world workflows',
      'Translating Figma and requirements into robust interfaces',
      'Interaction design, visual hierarchy, and frontend polish',
    ],
    technologies: [
      { name: 'React', icon: '/icons/svg/react.svg' },
      { name: 'Next.js', icon: '/icons/svg/nextjs.svg' },
      { name: 'TypeScript', icon: '/icons/svg/ts.svg' },
      { name: 'JavaScript', icon: '/icons/svg/js.svg' },
      { name: 'HTML5', icon: '/icons/svg/html5.svg' },
      { name: 'CSS3', icon: '/icons/svg/css3.svg' },
      { name: 'Tailwind CSS', icon: '/icons/svg/tailwind.svg' },
      { name: 'Styled Components', icon: '/icons/svg/styled.svg' },
    ],
  },
  {
    id: 'frontend-systems-and-data',
    title: 'Frontend systems and data',
    summary:
      'Creating reusable UI foundations and dependable data flows that help product teams scale their frontend work.',
    strengths: [
      'Reusable components and documented UI patterns',
      'Typed GraphQL queries and client-side data flows',
      'Scalable styling and design-system architecture',
    ],
    technologies: [
      { name: 'Apollo', icon: '/icons/svg/apollographql.svg' },
      { name: 'GraphQL', icon: '/icons/svg/graphql.svg' },
      { name: 'Storybook', icon: '/icons/svg/storybook.svg' },
      { name: 'Shadcn UI', icon: '/icons/svg/shadcn.svg' },
      { name: 'CSS Modules', icon: '/icons/svg/css-modules.svg' },
      { name: 'SCSS / Sass', icon: '/icons/svg/scss.svg' },
    ],
  },
  {
    id: 'quality-and-delivery',
    title: 'Quality and delivery',
    summary:
      'Keeping the path from idea to production predictable through practical tooling, review, and collaboration.',
    strengths: [
      'Testing, linting, and build-tool workflows',
      'Maintainability, performance, and implementation quality',
      'Cross-functional delivery with design and product partners',
    ],
    technologies: [
      { name: 'Git', icon: '/icons/svg/git.svg' },
      { name: 'Vite', icon: '/icons/svg/vite.svg' },
      { name: 'Webpack', icon: '/icons/svg/webpack.svg' },
      { name: 'ESLint', icon: '/icons/svg/eslint.svg' },
      { name: 'Jest', icon: '/icons/svg/jest.svg' },
      { name: 'Figma', icon: '/icons/svg/figma.svg' },
    ],
  },
  {
    id: 'ai-assisted-workflow',
    title: 'AI-assisted workflow',
    summary:
      'Using AI as a supporting tool for research, exploration, and repetitive work while keeping human judgement in charge.',
    strengths: [
      'Faster research and early-stage prototyping',
      'Acceleration of repetitive engineering tasks',
      'Deliberate review of generated ideas and implementation',
    ],
    technologies: [
      { name: 'OpenAI', icon: '/icons/svg/openai.svg' },
      { name: 'Cursor', icon: '/icons/svg/cursor.svg' },
      { name: 'GitHub Copilot', icon: '/icons/svg/copilot.svg' },
      { name: 'Perplexity', icon: '/icons/svg/perplexity.svg' },
      { name: 'DeepSeek', icon: '/icons/svg/deepseek.svg' },
      { name: 'Comet', icon: '/icons/svg/comet.svg' },
    ],
    secondary: true,
  },
];
