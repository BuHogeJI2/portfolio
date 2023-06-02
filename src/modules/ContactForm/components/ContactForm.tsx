import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  CommonModalWrapper,
  Form,
  FormButton,
  FormInput,
  FormTextArea,
  FormTitle,
  FormWrapper,
  LoadingOverlay,
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

type TModal = {
  show: boolean;
  title: string;
  text: string;
  success: boolean;
};

export default function ContactForm(): React.ReactElement {
  const [t] = useTranslation();
  const [emailSending, setEmailSending] = useState<boolean>(false);
  const [modal, setModal] = useState<TModal | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
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
          () => {
            setEmailSending(false);
            setModal({
              show: true,
              title: t('contact.me.success.title'),
              text: t('contact.me.success.text'),
              success: true,
            });
          },
          () => {
            setEmailSending(false);
            setModal({
              show: true,
              title: t('contact.me.error.title'),
              text: t('contact.me.error.text'),
              success: false,
            });
          }
        )
        .then(() => reset());
    } else {
      console.error('Environment variables not found');
    }
  }

  return (
    <>
      <FormWrapper>
        <FormTitle>{t('contact.me.title')}</FormTitle>
        <Form onSubmit={handleSubmit(onSubmit)}>
          {errors.name && <span>{t('contact.me.field.required')}</span>}
          <FormInput
            {...register('name', { required: true })}
            placeholder={t('contact.me.name') as string}
          />
          {errors.email && <span>{t('contact.me.field.required')}</span>}
          <FormInput
            {...register('email', { required: true })}
            placeholder={t('contact.me.email') as string}
          />
          {errors.message && <span>{t('contact.me.field.required')}</span>}
          <FormTextArea
            {...register('message', { required: true })}
            placeholder={t('contact.me.message') as string}
          />
          <FormButton type="submit">{t('contact.me.send')}</FormButton>
        </Form>
      </FormWrapper>
      <LoadingOverlay show={emailSending}>
        <img
          src="/portfolio/images/svg/spinner-button.svg"
          alt="spinner"
          className="loader"
        />
      </LoadingOverlay>
      <CommonModalWrapper
        show={modal?.show}
        title={modal?.title}
        text={modal?.text}
        success={modal?.success}
        onClose={() => {
          setModal(null);
        }}
      />
    </>
  );
}
