import { DefaultTheme } from 'styled-components';
import { TUnionStyles } from './theme.types';
import merge from 'lodash/merge';

const colors = {
  bgDark: 'black',
  bgLight: 'white',
};

const unionStyles: TUnionStyles = {
  container: {
    position: 'fixed',
    width: 'calc(100% - 80px)',
    height: '100%',
    padding: '0px 40px',
  },
  main: {
    border: '1px solid',
    height: 'calc(100% - 100px)',
  },
  header: {
    width: '100%',
    padding: '10px 0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    '.menu': {
      '.menu-link': {
        textDecoration: 'none',
        '&:not(:last-child)': {
          marginRight: '15px',
        },
      },
    },
  },
};

export const lightTheme: DefaultTheme = {
  container: {
    backgroundColor: colors.bgLight,
    color: colors.bgDark,
    ...unionStyles.container,
  },
  main: {
    borderColor: colors.bgDark,
    ...unionStyles.main,
  },
  header: merge(
    {
      '.menu': {
        '.menu-link': {
          color: colors.bgDark,
        },
      },
    },
    unionStyles.header
  ),
};
export const darkTheme: DefaultTheme = {
  container: {
    backgroundColor: colors.bgDark,
    color: colors.bgLight,
    ...unionStyles.container,
  },
  main: {
    borderColor: colors.bgLight,
    ...unionStyles.main,
  },
  header: merge(
    {
      '.menu': {
        '.menu-link': {
          color: colors.bgLight,
        },
      },
    },
    unionStyles.header
  ),
};
