import React from 'react';
import styled from 'styled-components';
import { languageCookieName, languageList } from '../../libs/data/Constants';
import { useTranslation } from 'react-i18next';
import Cookies from 'js-cookie';

const SwitcherWrapper = styled.div({
  position: 'absolute',
  top: '5px',
  right: '5px',
  '.active': {
    textDecoration: 'underline',
  },
});

const SwitchButton = styled.button(({ theme }) => theme.buttons.linkBtn);

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
          <SwitchButton
            className={currentLanguage === lng ? 'active' : undefined}
            onClick={() => handleChangeLanguage(lng)}
          >
            {lng.toUpperCase()}
          </SwitchButton>
        );
      })}
    </SwitcherWrapper>
  );
}
