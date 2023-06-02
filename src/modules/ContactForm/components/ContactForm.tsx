import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormButton,
  FormInput,
  FormTextArea,
  FormTitle,
  FormWrapper,
} from './ContactForm.styled';
import emailjs from 'emailjs-com';
import { useTranslation } from 'react-i18next';
import {
  emailServiceId,
  emailTemplateId,
  emailUserId,
} from '../../../constants';

interface IFormInputs {
  name: string;
  email: string;
  message: string;
}

interface ITemplateParams {
  [key: string]: unknown;
  from_name: string;
  reply_to: string;
  message: string;
}

export default function ContactForm(): React.ReactElement {
  const [t] = useTranslation();
  const [emailSending, setEmailSending] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormInputs>();

  function onSubmit(data: IFormInputs) {
    setEmailSending(true);

    const templateParams: ITemplateParams = {
      from_name: data.name,
      reply_to: data.email,
      message: data.message,
    };

    if (emailServiceId && emailTemplateId && emailUserId) {
      emailjs
        .send(emailServiceId, emailTemplateId, templateParams, emailUserId)
        .then(
          response => {
            setEmailSending(false);
            console.log('SUCCESS!', response.status, response.text);
          },
          err => {
            setEmailSending(false);
            console.log('FAILED...', err);
          }
        );
    } else {
      console.error('Environment variables not found');
    }
  }

  console.log({ emailSending });

  return (
    <FormWrapper>
      <FormTitle>{t('contact.me.title')}</FormTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {errors.name && <span>This field is required</span>}
        <FormInput
          {...register('name', { required: true })}
          placeholder="Your Name"
        />
        {errors.email && <span>This field is required</span>}
        <FormInput
          {...register('email', { required: true })}
          placeholder="Your Email"
        />
        {errors.message && <span>This field is required</span>}
        <FormTextArea
          {...register('message', { required: true })}
          placeholder="Your Message"
        />
        <FormButton type="submit">Send</FormButton>
      </Form>
    </FormWrapper>
  );
}
