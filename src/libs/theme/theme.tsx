import { DefaultTheme } from 'styled-components';
import { TUnionStyles } from './theme.types';
import merge from 'lodash/merge';
import { isMobile } from 'react-device-detect';

export const colors = {
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
  colors,
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1218px',
    height: '100vh',
    margin: '0 auto',
    padding: isMobile ? '0px 20px' : '0px 30px',
  },
  main: {
    position: 'relative',
    border: '1px solid',
    height: '100%',
  },
  header: {
    width: '100%',
    padding: '10px 0px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    cursor: 'pointer',
    fontSize: isMobile ? fontSize.middle2 : fontSize.middle,
    'input[type=checkbox]': {
      appearance: 'none',
      cursor: 'pointer',
    },
    'input[type="checkbox"]:after': {
      content: '"□"',
      fontSize: isMobile ? fontSize.xxl : fontSize.big,
    },
    'input[type="checkbox"]:checked:after': {
      content: '"■"',
      fontSize: isMobile ? fontSize.xxl : fontSize.big,
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
    padding: isMobile ? '10px 0' : '15px 0',
    marginTop: 'auto',
  },
  menu: {
    '.menu-link': {
      textDecoration: 'none',
      fontSize: isMobile ? fontSize.xxl : fontSize.middle,
    },
    '.active': {
      textDecoration: 'underline',
    },
  },
};

export const lightTheme: DefaultTheme = merge(
  {
    bg: {
      backgroundColor: colors.bgLight,
      color: colors.bgDark,
    },
    main: {
      borderColor: colors.bgDark,
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
    menu: {
      '.menu-link': {
        color: colors.bgDark,
      },
      mobileOverlay: {
        backgroundColor: colors.bgLight,
      },
    },
  },
  unionStyles
);
export const darkTheme: DefaultTheme = merge(
  {
    bg: {
      backgroundColor: colors.bgDark,
      color: colors.bgLight,
    },
    main: {
      borderColor: colors.bgLight,
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
    menu: {
      '.menu-link': {
        color: colors.bgLight,
      },
      mobileOverlay: {
        backgroundColor: colors.bgDark,
      },
    },
  },
  unionStyles
);
