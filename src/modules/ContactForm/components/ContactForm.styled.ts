import styled from 'styled-components';
import { media } from '../../../libs/theme/theme';
import { CommonModal, ShadowOverlay } from '../../Modals';

export const FormTitle = styled.h2({
  textAlign: 'center',
  fontSize: '18px',
  fontWeight: 'bold',
  [media.tablet]: {
    fontSize: '24px',
    marginBottom: '60px',
    padding: '0 60px',
  },
});

export const FormWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-evenly',
  width: 'calc(100% - 40px)',
  height: '100%',
  [media.tablet]: {
    justifyContent: 'center',
  },
});

export const Form = styled.form({
  display: 'flex',
  flexDirection: 'column',
  minWidth: '300px',
  [media.tablet]: {
    minWidth: '500px',
  },
});

export const FormInput = styled.input(({ theme }) => theme.input);
export const FormTextArea = styled.textarea(({ theme }) => theme.input);

export const FormButton = styled.button(
  ({ theme }) => theme.buttons.formButton
);

export const LoadingOverlay = styled(ShadowOverlay)({
  '.modal-wrapper': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  '.loader': {
    width: '30%',
    maxWidth: '300px',
  },
});

export const CommonModalWrapper = styled(CommonModal)<{ success?: boolean }>(
  ({ success }) => ({
    '.modal-wrapper': {
      boxShadow: success ? 'inset 0 0 15px green' : 'inset 0 0 15px red',
    },
  })
);
