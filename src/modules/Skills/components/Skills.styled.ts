import styled from 'styled-components';
import { media } from '../../../libs/theme/theme';

export const SkillsContent = styled.div({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column-reverse',
  justifyContent: 'space-between',
  alignItems: 'flex-end',
  overflowY: 'auto',
  [media.tablet]: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  '.tagcloud--item': {
    zIndex: '0 !important',
  },
});

export const SkillsTextWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  padding: '20px',
  maxWidth: '540px',
  fontSize: '18px',
});

export const TagCloudWrapper = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '100%',
  marginTop: '20px',
  [media.tablet]: {
    width: 'auto',
    marginTop: '0px',
  },
});
