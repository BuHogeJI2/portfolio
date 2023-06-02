import styled from 'styled-components';
import { media } from '../../../libs/theme/theme';

export const ModalOverlayWrapper = styled.div({
  position: 'fixed',
  top: 0,
  left: 0,
  zIndex: 1000,
  width: '100%',
  height: '100%',
  overflow: 'auto',
  backgroundColor: 'rgba(0,0,0,0.85)',
});

export const ModalWrapper = styled.div({
  position: 'absolute',
  bottom: 0,
  width: '100%',
  maxWidth: '600px',
  maxHeight: '90%',
  overflow: 'auto',
  backgroundColor: 'white',
  boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)',
  [media.tablet]: {
    width: '90%',
    top: '50%',
    left: '50%',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
  },
});

export const ModalHeader = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '1rem',
  borderBottom: '1px solid lightgray',
  padding: '1rem',
  '.modal-title': {
    margin: 0,
    fontSize: '1.5rem',
    fontWeight: 500,
  },
  '.modal-close': {
    cursor: 'pointer',
    fontSize: '1.5rem',
    fontWeight: 500,
    color: 'rgba(0,0,0,0.5)',
    border: '1px solid black',
    padding: '0.25rem 0.5rem',
    ':hover': {
      color: 'rgba(0,0,0,0.75)',
      backgroundColor: 'rgba(0,0,0,0.1)',
    },
  },
});

export const ModalBody = styled.div({
  marginBottom: '1rem',
  padding: '1rem',
});
