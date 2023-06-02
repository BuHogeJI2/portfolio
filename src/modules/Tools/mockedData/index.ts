type ToolsData = {
  id: number;
  title: string;
  tools: string[];
};

export const toolsData: Array<ToolsData> = [
  {
    id: 1,
    title: 'tools.main',
    tools: [
      'TypeScript',
      'React.js',
      'Webpack',
      'gh-pages',
      'react-router-dom',
      'styled-components',
    ],
  },
  {
    id: 2,
    title: 'tools.utils',
    tools: ['i18n', 'EmailJS', 'lodash', 'js-cookie'],
  },
  { id: 3, title: 'tools.code', tools: ['Eslint', 'Prettier'] },
  { id: 4, title: 'tools.manager', tools: ['npm'] },
];
