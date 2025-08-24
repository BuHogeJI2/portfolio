export type TSkill = {
  name: string;
  description: string;
  icon: string;
};

export type TSkillDomain = {
  domain: string;
  description: string;
  skills: Array<TSkill>;
};

export const skills: Array<TSkillDomain> = [
  {
    domain: 'Frontend Development',
    description:
      "I'm proficient and have experience building IT products with the following technologies and tools.",
    skills: [
      {
        name: 'React',
        description:
          'React is a JavaScript library for building user interfaces.',
        icon: '/icons/svg/react.svg',
      },
      {
        name: 'Next.js',
        description:
          'Next.js is a React framework for building server-side rendered and static websites.',
        icon: '/icons/svg/nextjs.svg',
      },
      {
        name: 'TypeScript',
        description:
          'TypeScript is a superset of JavaScript that adds static typing.',
        icon: '/icons/svg/ts.svg',
      },
      {
        name: 'JavaScript',
        description:
          'JavaScript is a programming language that allows you to implement complex features on web pages.',
        icon: '/icons/svg/js.svg',
      },
      {
        name: 'Apollo GraphQL',
        description:
          'Apollo GraphQL is a library for building GraphQL clients and servers.',
        icon: '/icons/svg/apollographql.svg',
      },
      {
        name: 'GraphQL',
        description:
          'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data.',
        icon: '/icons/svg/graphql.svg',
      },
      {
        name: 'Git',
        description:
          'Git is a distributed version control system that allows you to track changes in your code.',
        icon: '/icons/svg/git.svg',
      },
      {
        name: 'Vite',
        description:
          'Vite is a build tool that allows you to create a fast and efficient development environment.',
        icon: '/icons/svg/vite.svg',
      },
      {
        name: 'Webpack',
        description:
          'Webpack is a module bundler that allows you to create a fast and efficient development environment.',
        icon: '/icons/svg/webpack.svg',
      },
      {
        name: 'ESLint',
        description:
          'ESLint is a linter for JavaScript that allows you to create a fast and efficient development environment.',
        icon: '/icons/svg/eslint.svg',
      },
      {
        name: 'Jest',
        description:
          'Jest is a testing framework for JavaScript that allows you to create a fast and efficient development environment.',
        icon: '/icons/svg/jest.svg',
      },
    ],
  },
];
