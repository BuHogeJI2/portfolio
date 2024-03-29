import React from 'react';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';
import useCookies from '../../libs/hooks/useCookies';
import { languageCookieName, languageList } from '../../constants';

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
  const { setCookie } = useCookies();

  const { language: currentLanguage, changeLanguage } = i18n;

  function handleChangeLanguage(nextLanguage) {
    setCookie(languageCookieName, nextLanguage);
    changeLanguage(nextLanguage);
  }

  return (
    <SwitcherWrapper>
      {languageList.map(lng => {
        return (
          <SwitchButton
            key={lng}
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
