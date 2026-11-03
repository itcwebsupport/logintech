'use client';

import { useState } from 'react';
import { toast } from 'react-toastify';
import { apiPost } from '@/lib/api';
import ActionButton from '@/app/components/ActionButton';

const EMPTY_CONTACT_FORM = {
  name: null,
  email: null,
  subject: null,
  body: null,
  privacyPolicy: false
};

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [contactForm, setContactForm] = useState({ ...EMPTY_CONTACT_FORM });
  const [validationErrors, setValidationErrors] = useState({});

  const setForm = field => {
    return e => {
      const contactFormCopy = JSON.parse(JSON.stringify(contactForm));

      switch (field) {
        case 'privacyPolicy':
          contactFormCopy[field] = e.target.checked;
          break;
        default:
          contactFormCopy[field] = e.target.value === '' ? null : e.target.value;
      }

      setContactForm(contactFormCopy);
    };
  };

  async function submitForm() {
    setIsLoading(true);

    let responseData;

    try {
      const response = await apiPost('/api/v1/email-contact', contactForm);
      responseData = await response.json();
    } catch (e) {
      responseData = {
        statur: 'error',
        message: 'Hiba történt az adatok beküldése közben.'
      };
    }

    const { message, status, errors } = responseData;

    setIsLoading(false);

    if (status === 'ok') {
      toast.success(message);

      setValidationErrors({});
      setContactForm({ ...EMPTY_CONTACT_FORM });
    } else {
      toast.error(message);

      if (errors) {
        setValidationErrors(errors);
      }
    }
  }

  return (
    <div className="row g-3">
      <div className="col-md-6">
        <label htmlFor="contact-name" className="form-label">Név</label>
        <input
          id="contact-name"
          type="text"
          className={`form-control ${validationErrors.name ? 'is-invalid' : ''}`}
          placeholder="Az Ön neve"
          required
          value={contactForm.name ?? ''}
          onChange={setForm('name')}
        />
        {validationErrors.name && <div className="invalid-feedback">{validationErrors.name}</div>}
      </div>

      <div className="col-md-6">
        <label htmlFor="contact-email" className="form-label">E-mail</label>
        <input
          id="contact-email"
          type="email"
          className={`form-control ${validationErrors.email ? 'is-invalid' : ''}`}
          placeholder="pelda@email.hu"
          required
          value={contactForm.email ?? ''}
          onChange={setForm('email')}
        />
        {validationErrors.email && <div className="invalid-feedback">{validationErrors.email}</div>}
      </div>

      <div className="col-12">
        <label htmlFor="contact-subject" className="form-label">Tárgy</label>
        <input
          id="contact-subject"
          type="text"
          className={`form-control ${validationErrors.subject ? 'is-invalid' : ''}`}
          placeholder="Miben segíthetünk?"
          required
          value={contactForm.subject ?? ''}
          onChange={setForm('subject')}
        />
        {validationErrors.subject && <div className="invalid-feedback">{validationErrors.subject}</div>}
      </div>

      <div className="col-12">
        <label htmlFor="contact-message" className="form-label">Üzenet</label>
        <textarea
          id="contact-message"
          className={`form-control ${validationErrors.body ? 'is-invalid' : ''}`}
          rows={6}
          placeholder="Írja le röviden, milyen ügyben keres minket..."
          required
          value={contactForm.body ?? ''}
          onChange={setForm('body')}
        ></textarea>
        {validationErrors.body && <div className="invalid-feedback">{validationErrors.body}</div>}
      </div>

      <div className="col-12">
        <div className="form-check">
          <input
            id="contact-accept"
            type="checkbox"
            className={`form-check-input ${validationErrors.privacyPolicy ? 'is-invalid' : ''}`}
            required
            checked={contactForm.privacyPolicy}
            onChange={setForm('privacyPolicy')}
          />
          <label htmlFor="contact-accept" className="form-check-label">
            Elfogadom az{' '}
            <a href="/adatkezelesi-tajekoztato" target="_blank" rel="noopener noreferrer">
              adatkezelési tájékoztatót
            </a>
            , és hozzájárulok adataim kezeléséhez a kapcsolatfelvétel céljából.
          </label>
          {validationErrors.privacyPolicy && <div className="invalid-feedback">{validationErrors.privacyPolicy}</div>}
        </div>
      </div>

      <div className="col-12">
        <ActionButton
          className="btn btn-primary contact-submit"
          isLoading={isLoading}
          onClick={submitForm}
        >
          Üzenet küldése <i className="bi bi-send"></i>
        </ActionButton>
      </div>
    </div>
  );
}
