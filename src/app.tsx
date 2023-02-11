import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './theme/theme';

export default function app(): React.ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <h1>Portfolio</h1>
    </ThemeProvider>
  );
}
