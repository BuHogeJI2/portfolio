import styled from 'styled-components';
import { fontSize, media } from '../../../libs/theme/theme';
import { ListItems } from '../../ListItems';

export const ToolsWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  alignSelf: 'flex-start',
  width: '100%',
  height: '100%',
  '.title': {
    fontSize: fontSize.big,
    textAlign: 'center',
    marginTop: '40px',
    marginBottom: '10px',
    padding: '0 40px',
    [media.tablet]: {
      marginTop: '0px',
      marginBottom: '0px',
    },
  },
  '.sections': {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    [media.tablet]: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
    },
  },
  '.section-title': {
    fontSize: fontSize.big,
    width: '50%',
    display: 'flex',
    padding: '0px 20px',
    [media.tablet]: {
      display: 'block',
      width: '100%',
    },
  },
  '.block': {
    display: 'flex',
    [media.tablet]: {
      display: 'block',
      margin: '0 50px',
    },
  },
  li: {
    fontSize: fontSize.big,
    fontWeight: 'bold',
    listStyle: 'none',
    lineHeight: 1.5,
    '&:before': {
      content: "'⦿'",
      width: '10px',
      height: '10px',
      paddingRight: '10px',
    },
  },
});

export const StyledListItem = styled(ListItems)({
  padding: '0 10px',
  width: '50%',
  [media.tablet]: {
    width: '100%',
  },
});
