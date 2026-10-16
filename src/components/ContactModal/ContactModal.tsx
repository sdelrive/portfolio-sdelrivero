import { useState, type ChangeEvent, type FormEvent } from "react";
import { useLanguage } from "../../i18n/LanguageContext";
import { CONTACT_EMAIL } from "../../constants";

type ContactModalProps = {
  onClose: () => void;
};

export default function ContactModal({ onClose }: ContactModalProps) {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Nuevo mensaje de contacto de ${formData.name}`
    );

    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
    );

    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;

    onClose();
  };

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div
        className="contact-modal"
        onClick={(e) => e.stopPropagation()} // para que el click dentro no cierre
      >
        <div className="contact-modal__header">
          <h2>{t.contactForm.title}</h2>
          <button
            type="button"
            className="contact-modal__close"
            onClick={onClose}
            aria-label={t.contactForm.close}
          >
            ✕
          </button>
        </div>

        <p className="contact-modal__subtitle">
          {t.contactForm.subtitle}
        </p>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form__field">
            <label htmlFor="name">{t.contactForm.nameLabel}</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder={t.contactForm.namePlaceholder}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form__field">
            <label htmlFor="email">{t.contactForm.emailLabel}</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder={t.contactForm.emailPlaceholder}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form__field">
            <label htmlFor="message">{t.contactForm.messageLabel}</label>
            <textarea
              id="message"
              name="message"
              placeholder={t.contactForm.messagePlaceholder}
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className="contact-form__actions">
            <button
              type="button"
              className="btn btn--outline"
              onClick={onClose}
            >
              {t.contactForm.cancel}
            </button>
            <button type="submit" className="btn btn--filled">
              {t.contactForm.send}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
