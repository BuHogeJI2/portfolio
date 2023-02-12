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
  label: {
    cursor: 'pointer',
    'input[type=checkbox]': {
      appearance: 'none',
    },
  },
};

export const lightTheme: DefaultTheme = merge(
  {
    container: {
      backgroundColor: colors.bgLight,
      color: colors.bgDark,
    },
    main: {
      borderColor: colors.bgDark,
    },
    header: {
      '.menu': {
        '.menu-link': {
          color: colors.bgDark,
        },
      },
    },
    label: {
      color: colors.bgDark,
    },
  },
  unionStyles
);
export const darkTheme: DefaultTheme = merge(
  {
    container: {
      backgroundColor: colors.bgDark,
      color: colors.bgLight,
    },
    main: {
      borderColor: colors.bgLight,
    },
    header: {
      '.menu': {
        '.menu-link': {
          color: colors.bgLight,
        },
      },
    },
    label: {
      color: colors.bgLight,
    },
  },
  unionStyles
);
