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
  {
    domain: 'UX/UI & Style',
    description:
      'I have extensive experience working with a wide range of UI component libraries while building design systems and can assist you in selecting the best one for your project.',
    skills: [
      {
        name: 'Shadcn UI',
        description:
          'Shadcn UI is a library of reusable UI components for React.',
        icon: '/icons/svg/shadcn.svg',
      },
      {
        name: 'Tailwind CSS',
        description:
          'Tailwind CSS is a utility-first CSS framework for rapidly building custom designs.',
        icon: '/icons/svg/tailwind.svg',
      },
      {
        name: 'Styled Components',
        description:
          'Styled Components is a library for styling React components.',
        icon: '/icons/svg/styled.svg',
      },
      {
        name: 'Storybook',
        description:
          'Storybook is a library for building UI components and pages in isolation.',
        icon: '/icons/svg/storybook.svg',
      },
      {
        name: 'Figma',
        description:
          'Figma is a design tool that allows you to create and share designs.',
        icon: '/icons/svg/figma.svg',
      },
      {
        name: 'HTML5',
        description:
          'HTML5 is a markup language for structuring and presenting content on the World Wide Web.',
        icon: '/icons/svg/html5.svg',
      },
      {
        name: 'CSS3',
        description:
          'CSS3 is a style sheet language used for describing the presentation of a document written in HTML.',
        icon: '/icons/svg/css3.svg',
      },
      {
        name: 'SCSS / SASS',
        description:
          'SCSS / SASS is a preprocessor for CSS that allows you to write CSS in a more organized and efficient way.',
        icon: '/icons/svg/scss.svg',
      },
      {
        name: 'CSS Modules',
        description:
          'CSS Modules is a CSS preprocessor that allows you to write CSS in a more organized and efficient way.',
        icon: '/icons/svg/css-modules.svg',
      },
    ],
  },
];
