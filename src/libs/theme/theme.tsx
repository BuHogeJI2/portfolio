import { DefaultTheme } from 'styled-components';
import { TUnionStyles } from './theme.types';
import merge from 'lodash/merge';
import { isMobile } from 'react-device-detect';

const colors = {
  bgDark: 'black',
  bgLight: '#f0f0ff',
};

const fontSizes = [12, 16, 18, 20, 30];
export const fontSize = {
  text: `${fontSizes[0]}px`,
  middle: `${fontSizes[1]}px`,
  middle2: `${fontSizes[2]}px`,
  big: `${fontSizes[3]}px`,
  xxl: `${fontSizes[4]}px`,
};

const unionStyles: TUnionStyles = {
  container: {
    position: 'fixed',
    width: isMobile ? 'calc(100% - 40px)' : 'calc(100% - 60px)',
    padding: isMobile ? '0px 20px' : '0px 30px',
    height: '100%',
  },
  main: {
    position: 'relative',
    border: '1px solid',
    height: isMobile ? 'calc(100% - 100px)' : 'calc(100% - 150px)',
  },
  header: {
    width: '100%',
    padding: '10px 0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    fontSize: isMobile ? fontSize.middle2 : fontSize.text,
    'input[type=checkbox]': {
      appearance: 'none',
      cursor: 'pointer',
    },
    'input[type="checkbox"]:after': {
      content: '"□"',
      fontSize: isMobile ? fontSize.xxl : fontSize.middle,
    },
    'input[type="checkbox"]:checked:after': {
      content: '"■"',
      fontSize: isMobile ? fontSize.xxl : fontSize.middle,
    },
  },
  photo: {
    width: '75px',
    height: '75px',
    borderRadius: '50%',
    marginLeft: '20px',
    border: '1px solid',
  },
  buttons: {
    linkBtn: {
      border: 'none',
      backgroundColor: 'transparent',
      cursor: 'pointer',
      fontFamily: 'UbuntuMono',
      fontSize: isMobile ? fontSize.big : fontSize.middle,
      '&:hover': {
        fontWeight: 'bold',
      },
    },
  },
  footer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: isMobile ? '7px' : '10px',
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
    photo: {
      borderColor: colors.bgDark,
    },
    buttons: {
      linkBtn: {
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
    photo: {
      borderColor: colors.bgLight,
    },
    buttons: {
      linkBtn: {
        color: colors.bgLight,
      },
    },
  },
  unionStyles
);
