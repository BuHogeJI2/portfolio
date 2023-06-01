import React from 'react';
import { useForm } from 'react-hook-form';
import {
  Form,
  FormButton,
  FormInput,
  FormTextArea,
  FormTitle,
  FormWrapper,
} from './ContactForm.styled';
import { useTranslation } from 'react-i18next';

interface FormInputs {
  name: string;
  email: string;
  message: string;
}

export default function ContactForm(): React.ReactElement {
  const [t] = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInputs>();

  const onSubmit = (data: FormInputs) => {
    console.log(data);
  };

  return (
    <FormWrapper>
      <FormTitle>{t('contact.me.title')}</FormTitle>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormInput
          {...register('name', { required: true })}
          placeholder="Your Name"
        />
        {errors.name && <span>This field is required</span>}
        <FormInput
          {...register('email', { required: true })}
          placeholder="Your Email"
        />
        {errors.email && <span>This field is required</span>}
        <FormTextArea
          {...register('message', { required: true })}
          placeholder="Your Message"
        />
        {errors.message && <span>This field is required</span>}
        <FormButton type="submit">Send</FormButton>
      </Form>
    </FormWrapper>
  );
}
