import React from 'react';
import { Image } from '../../../components';
import styled from 'styled-components';
import { fontSize } from '../../../libs/theme/theme';
import { isMobile } from 'react-device-detect';

const HeroWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  '.hero-text': {
    '.title': {
      fontSize: fontSize.xxl,
      textTransform: 'uppercase',
      whiteSpace: isMobile ? 'nowrap' : 'normal',
      userSelect: 'none',
      cursor: 'pointer',
    },
    '.sub-title': {
      fontSize: fontSize.big,
      letterSpacing: '4px',
      marginTop: '5px',
    },
  },
});

const PhotoImage = styled(Image)(({ theme }) => theme.photo);

interface IHeroProps {
  title: string;
  subTitle?: string | null;
  image?: string;
  onClick?(): void;
}

export default function Hero({
  title,
  subTitle,
  image,
  onClick,
}: IHeroProps): React.ReactElement {
  return (
    <HeroWrapper>
      <div className={'hero-text'}>
        <h1 className={'title'} onClick={onClick}>
          {title}
        </h1>
        {!isMobile ? <h3 className={'sub-title'}>{subTitle}</h3> : null}
      </div>
      {image && !isMobile ? <PhotoImage src={image} onClick={onClick} /> : null}
    </HeroWrapper>
  );
}
