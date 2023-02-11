import { DefaultTheme } from 'styled-components';
import { TUnionStyles } from './theme.types';

const colors = {
  bgDark: 'black',
  bgLight: 'white',
};

const unionStyles: TUnionStyles = {
  container: {
    position: 'fixed',
    width: '100%',
    height: '100%',
  },
  main: {
    border: '1px solid',
    margin: '0px 20px',
    height: 'calc(100% - 100px)',
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
};
