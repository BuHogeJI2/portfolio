import styled from 'styled-components';
import { Image } from '../../../components';
import { fontSize, media } from '../../../libs/theme/theme';

export const Title = styled.h1({
  margin: '30px 0px',
});

export const Photo = styled(Image)(
  ({ theme }) => theme.photo.aboutMe,
  () => ({
    marginRight: '20px',
    marginBottom: '20px',
  })
);

export const ContentWrapper = styled.div({
  margin: '60px 20px 10px 20px',
  [media.tablet]: {
    margin: '50px',
  },
});

export const TextWrapper = styled.div({
  fontSize: fontSize.middle2,
  '.text-block': {
    marginBottom: '20px',
  },
});
