import styled from 'styled-components';
import { media } from '../../../libs/theme/theme';

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
