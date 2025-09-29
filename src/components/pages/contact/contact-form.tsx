import { ReactElement, useState } from 'react';
import emailjs from '@emailjs/browser';
import clsx from 'clsx';

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
        message: message,
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

  const labelStyles = clsx(
    'mb-2 block text-sm font-medium',
    'text-gray-700 dark:text-gray-300',
  );

  const inputStyles = clsx(
    'w-full rounded-md border px-3 py-2 shadow-sm',
    'placeholder-gray-400',
    'focus:border-primary-default focus:outline-none focus:ring-2 focus:ring-primary-default',
    'disabled:cursor-not-allowed disabled:opacity-50',
    'border-gray-300',
    'dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-500',
  );

  const textareaStyles = clsx(inputStyles, 'resize-vertical');

  const buttonStyles = clsx(
    'flex w-full justify-center rounded-md border border-transparent',
    'px-4 py-2 text-sm font-medium text-white shadow-sm',
    'bg-primary-default dark:bg-primary-dark',
    'disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100',
    'hover:bg-primary-default/90 dark:hover:bg-primary-dark/90',
    'transition-colors duration-200',
  );

  const successMessageStyles = clsx(
    'rounded-md p-4',
    'bg-green-50 text-green-800',
    'dark:bg-green-900 dark:text-green-200',
  );

  const errorMessageStyles = clsx(
    'rounded-md p-4',
    'bg-red-50 text-red-800',
    'dark:bg-red-900 dark:text-red-200',
  );

  return (
    <div className="mx-auto mt-8 w-full max-w-md">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="email" className={labelStyles}>
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            disabled={isSubmitting}
            className={inputStyles}
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label htmlFor="message" className={labelStyles}>
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
            rows={4}
            disabled={isSubmitting}
            className={textareaStyles}
            placeholder="Enter your message"
          />
        </div>

        <button type="submit" disabled={isSubmitting} className={buttonStyles}>
          {isSubmitting ? 'Sending...' : 'Submit'}
        </button>

        {submitStatus === 'success' && (
          <div className={successMessageStyles}>
            <p className="text-sm font-medium">Message sent successfully!</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className={errorMessageStyles}>
            <p className="text-sm font-medium">
              Failed to send message. Please try again.
            </p>
          </div>
        )}
      </form>
    </div>
  );
}
