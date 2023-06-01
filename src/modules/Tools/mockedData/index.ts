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
      'react-router-dom',
      'styled-components',
    ],
  },
  { id: 2, title: 'tools.utils', tools: ['i18n', 'lodash', 'js-cookie'] },
  { id: 3, title: 'tools.code', tools: ['Eslint', 'Prettier'] },
  { id: 4, title: 'tools.manager', tools: ['npm'] },
];
