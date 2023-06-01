import { DefaultTheme } from 'styled-components';
import { TUnionStyles } from './theme.types';
import merge from 'lodash/merge';
import { isMobile } from 'react-device-detect';

const MAX_MOBILE_WIDTH = 830;
const MIN_TABLET_DEVICE_WIDTH = 831;
const MIN_DESKTOP_DEVICE_WIDTH = 1024;

const breakpoints = [
  `${MIN_TABLET_DEVICE_WIDTH}px) and (min-device-width: ${MIN_TABLET_DEVICE_WIDTH}px`,
  `${MIN_DESKTOP_DEVICE_WIDTH}px) and (min-device-width: ${MIN_DESKTOP_DEVICE_WIDTH}px`,
];

const MEDIA_MOBILE = `@media screen and (max-width: ${MAX_MOBILE_WIDTH}px)`;
const MEDIA_TABLET = `@media screen and (min-width: ${breakpoints[0]})`;
const MEDIA_DESKTOP = `@media screen and (min-width: ${breakpoints[1]})`;

export const media = {
  mobile: MEDIA_MOBILE,
  tablet: MEDIA_TABLET,
  desktop: MEDIA_DESKTOP,
};

export const colors = {
  bgDark: 'black',
  bgLight: '#f0f0ff',
};

const fontSizes = [12, 16, 18, 22, 30];
export const fontSize = {
  text: `${fontSizes[0]}px`,
  middle: `${fontSizes[1]}px`,
  middle2: `${fontSizes[2]}px`,
  big: `${fontSizes[3]}px`,
  xxl: `${fontSizes[4]}px`,
};

const unionStyles: TUnionStyles = {
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    overflowY: 'scroll',
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
    minWidth: '75px',
    minHeight: '75px',
    width: '75px',
    height: '75px',
    borderRadius: '50%',
    marginLeft: '20px',
    border: '1px solid',
    cursor: 'pointer',
    objectFit: 'cover',
    aboutMe: {
      width: '125px',
      height: '125px',
      border: '1px solid',
      borderRadius: '50%',
      objectFit: 'cover',
      marginLeft: '0px',
      float: 'left',
      [media.tablet]: {
        width: '250px',
        height: '250px',
        borderRadius: '0',
      },
    },
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
    formButton: {
      padding: '10px 20px',
      backgroundColor: 'transparent',
      cursor: 'pointer',
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
  slider: {
    wrapper: {
      padding: '10px',
      border: '1px solid lightgrey',
      borderRadius: '5px',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      '.slide-text': {
        fontSize: fontSize.xxl,
        lineHeight: isMobile ? 1.1 : 1.5,
      },
    },
  },
  input: {
    marginBottom: '10px',
    padding: '10px',
    backgroundColor: 'transparent',
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
      aboutMe: {
        borderColor: colors.bgDark,
      },
    },
    buttons: {
      linkBtn: {
        color: colors.bgDark,
      },
      formButton: {
        border: '1px solid',
        borderColor: colors.bgDark,
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
    input: {
      border: '1px solid',
      borderColor: colors.bgDark,
      color: colors.bgDark,
      '&::placeholder': {
        color: colors.bgDark,
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
      aboutMe: {
        borderColor: colors.bgLight,
      },
    },
    buttons: {
      linkBtn: {
        color: colors.bgLight,
      },
      formButton: {
        border: '1px solid',
        borderColor: colors.bgLight,
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
    input: {
      border: '1px solid',
      borderColor: colors.bgLight,
      color: colors.bgLight,
      '&::placeholder': {
        color: colors.bgLight,
      },
    },
  },
  unionStyles
);
