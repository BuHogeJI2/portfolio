import { FormEvent, ReactElement, useState } from 'react';
import emailjs from '@emailjs/browser';
import {
  buttonStyles,
  errorMessageStyles,
  inputStyles,
  labelStyles,
  successMessageStyles,
  textareaStyles,
} from './contact-form.styles';

const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const toEmail = import.meta.env.VITE_EMAILJS_TO_EMAIL;

export function ContactForm(): ReactElement {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    'idle' | 'success' | 'error'
  >('idle');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      if (!serviceId || !templateId || !publicKey || !toEmail) {
        throw new Error(
          'EmailJS configuration is missing. Please check your environment variables.',
        );
      }

      const templateParams = {
        from_name: email,
        message,
        to_email: toEmail,
      };

      await emailjs.send(serviceId, templateId, templateParams, publicKey);

      setSubmitStatus('success');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error('Error sending email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
      aria-busy={isSubmitting}
    >
      <div>
        <label htmlFor="email" className={labelStyles}>
          Email address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          autoComplete="email"
          value={email}
          onChange={event => setEmail(event.target.value)}
          required
          disabled={isSubmitting}
          className={inputStyles}
          placeholder="you@example.com"
        />
      </div>

      <div>
        <label htmlFor="message" className={labelStyles}>
          Project context
        </label>
        <textarea
          id="message"
          name="message"
          value={message}
          onChange={event => setMessage(event.target.value)}
          required
          rows={7}
          disabled={isSubmitting}
          className={textareaStyles}
          placeholder="What are you building, and where could frontend support make the biggest difference?"
        />
      </div>

      <button type="submit" disabled={isSubmitting} className={buttonStyles}>
        {isSubmitting ? 'Sending…' : 'Send enquiry'}
      </button>

      {submitStatus === 'success' && (
        <div className={successMessageStyles} role="status" aria-live="polite">
          <p className="text-sm font-medium">
            Message sent. Thanks—I’ll reply by email.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className={errorMessageStyles} role="alert" aria-live="assertive">
          <p className="text-sm font-medium">
            The message could not be sent. Please try again or use the direct
            email link.
          </p>
        </div>
      )}
    </form>
  );
}
