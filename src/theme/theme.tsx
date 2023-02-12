import { DefaultTheme } from 'styled-components';
import { TUnionStyles } from './theme.types';
import merge from 'lodash/merge';

const colors = {
  bgDark: 'black',
  bgLight: 'white',
};

const fontSizes = [12, 16, 20, 24];
const fontSize = {
  text: fontSizes[0],
  middle: fontSizes[1],
  big: fontSizes[2],
  xxl: fontSizes[3],
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
    fontSize: fontSize.text,
    'input[type=checkbox]': {
      appearance: 'none',
      cursor: 'pointer',
    },
    'input[type="checkbox"]:after': {
      content: '"□"',
      fontSize: fontSize.big,
    },
    'input[type="checkbox"]:checked:after': {
      content: '"■"',
      fontSize: fontSize.big,
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
      'input[type="checkbox"]:after': {
        color: colors.bgDark,
      },
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
      'input[type="checkbox"]:after': {
        color: colors.bgLight,
      },
    },
  },
  unionStyles
);
