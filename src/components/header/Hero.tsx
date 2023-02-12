import React from 'react';
import Image from '../base/Image';
import styled from 'styled-components';
import { fontSize } from '../../libs/theme/theme';

const HeroWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  h1: {
    fontSize: fontSize.xxl,
    textTransform: 'uppercase',
  },
  h3: {
    fontSize: fontSize.big,
    letterSpacing: '4px',
    marginTop: '5px',
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
      <div>
        <h1>{title}</h1>
        <h3>{subTitle}</h3>
      </div>
      {image ? <PhotoImage src={image} onClick={onClick} /> : null}
    </HeroWrapper>
  );
}
