import React from 'react';
import Image from '../base/Image';
import styled from 'styled-components';
import { fontSize } from '../../theme/theme';

const HeroWrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  h1: {
    fontSize: fontSize.xxl,
  },
  h3: {
    fontSize: fontSize.big,
    letterSpacing: '6px',
    marginTop: '5px',
  },
});

const PhotoImage = styled(Image)(({ theme }) => theme.photo);

interface IHeroProps {
  title: string;
  subTitle?: string;
  image?: string;
}

export default function Hero({
  title,
  subTitle,
  image,
}: IHeroProps): React.ReactElement {
  return (
    <HeroWrapper>
      <div>
        <h1>{title}</h1>
        <h3>{subTitle}</h3>
      </div>
      {image ? <PhotoImage src={image} /> : null}
    </HeroWrapper>
  );
}
