import { ReactElement, useState } from 'react';
import emailjs from '@emailjs/browser';
import { labelStyles, inputStyles, textareaStyles, buttonStyles, successMessageStyles, errorMessageStyles } from './contact-form.styles';

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
