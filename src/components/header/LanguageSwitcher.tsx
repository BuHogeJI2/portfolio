import React from 'react';
import styled from 'styled-components';
import {
  languageCookieName,
  languageList,
} from '../../libs/data/common/Constants';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

export const SwitcherWrapper = styled.div({
  position: 'absolute',
  bottom: 0,
  right: 0,
});

export default function LanguageSwitcher(): React.ReactElement {
  const [, i18n] = useTranslation();

  const { language: currentLanguage, changeLanguage } = i18n;

  function handleChangeLanguage(nextLanguage) {
    Cookies.set(languageCookieName, nextLanguage, {
      // just make the cookie not session based
      expires: new Date(new Date().getFullYear() + 1, 1),
      path: '/',
    });

    changeLanguage(nextLanguage);
  }

  return (
    <SwitcherWrapper>
      {languageList.map(lng => {
        return (
          <button
            className={currentLanguage === lng ? 'active' : undefined}
            onClick={() => handleChangeLanguage(lng)}
          >
            {lng}
          </button>
        );
      })}
    </SwitcherWrapper>
  );
}
