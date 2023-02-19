import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './libs/locales/en/common.json';
import translationRU from './libs/locales/ru/common.json';
import translationBLR from './libs/locales/blr/common.json';
import { defaultLanguage } from './libs/data/Constants';

const resources = {
  en: { translation: translationEN },
  ru: { translation: translationRU },
  blr: { translation: translationBLR },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    debug: false,
    fallbackLng: defaultLanguage,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
