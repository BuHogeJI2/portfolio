import { isMobile } from 'react-device-detect';

export const languageList = ['en', 'blr', 'ru'];
export const defaultLanguage = 'en';
export const languageCookieName = 'i18next';
export const lightModeCookieName = 'LIGHT_MODE';
export const tagsSize = isMobile ? 300 : 400;

export enum ELightMode {
  LIGHT = 'light',
  DARK = 'dark',
}
