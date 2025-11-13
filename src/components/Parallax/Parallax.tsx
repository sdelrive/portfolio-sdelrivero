// @ts-nocheck
import { useContext, useState } from "react";
import ParallaxImage from "../ParallaxImage/ParallaxImage";
import "./Parallax.css";
import { LanguageContext } from "../../LandingPage";

export default function Parallax({ title, description, background, topground }) {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });


   const context = useContext(LanguageContext);
  
    if (!context) {
      throw new Error("Slider must be used within a LanguageContext.Provider");
    }
  
    const { language } = context; // 'ESP' o 'ENG', por ejemplo
  

  const onContact = () => {
    setShowForm(true);
  };

  const onCloseForm = () => {
    setShowForm(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(
      `Nuevo mensaje de contacto de ${formData.name}`
    );

    const body = encodeURIComponent(
      `Nombre: ${formData.name}\nEmail: ${formData.email}\n\nMensaje:\n${formData.message}`
    );


    const to = "sdelrive97@gmail.com";

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

    // Opcional: cerrar modal y limpiar
    setShowForm(false);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <>
      <div className="mainContent fade-in">
        <div className="hero__content">
          <div className="hero__text">
            <h1>{title}</h1>
            <p>{description}</p>

            <div className="hero__buttons">
              <button onClick={onContact} className="btn btn--filled">
                { language == 'ENG' ? 'Contact me' : 'Contactame!'} 
              </button>

              <button
                className="btn btn--outline"
                onClick={() => {
                  const link = document.createElement("a");
                  link.href = "/curriculum.pdf";
                  link.download = "Curriculum_Santiago_del_Rivero.pdf";
                  link.click();
                }}
              >
                CV
              </button>
            </div>
          </div>

          <div className="hero__image">
            <ParallaxImage
              background={background}
              topground={topground}
            />
            <div className="hero__fade"></div>
          </div>
        </div>
      </div>

      {/* Modal de contacto */}
      {showForm && (
        <div className="contact-modal-overlay" onClick={onCloseForm}>
          <div
            className="contact-modal"
            onClick={(e) => e.stopPropagation()} // para que el click dentro no cierre
          >
            <div className="contact-modal__header">
              <h2>Hablemos 👋</h2>
              <button
                type="button"
                className="contact-modal__close"
                onClick={onCloseForm}
              >
                ✕
              </button>
            </div>

            <p className="contact-modal__subtitle">
              Contame brevemente qué necesitás y te respondo por mail.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="contact-form__field">
                <label htmlFor="name">Nombre</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Tu nombre"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-form__field">
                <label htmlFor="message">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Contame un poco del proyecto..."
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
                  onClick={onCloseForm}
                >
                  Cancelar
                </button>
                <button type="submit" className="btn btn--filled">
                  Enviar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
