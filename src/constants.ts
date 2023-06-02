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

export const emailServiceId = process.env.REACT_APP_SERVICE_ID;
export const emailTemplateId = process.env.REACT_APP_TEMPLATE_ID;
export const emailUserId = process.env.REACT_APP_USER_ID;
