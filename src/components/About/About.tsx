import { useState } from 'react';
import { useLanguage } from '../../i18n/LanguageContext';
import ContactModal from '../ContactModal/ContactModal';
import heroimage from '/hero_setup.webp';


const About = () => {

  const { t } = useLanguage();
  const [showForm, setShowForm] = useState(false);

  return (
     <section id="about" className="about">
                <div className="container about-description">
                    <h2>{t.about.title}</h2>
                    <div className="about-text">
                      {t.about.text}
                      <hr />
                    </div>
                    <div className="about-actions">
                      <button type="button" className="btn btn--filled" onClick={() => setShowForm(true)}>
                        {t.about.contactButton}
                      </button>
                    </div>
                </div>
                <div className="container about-image">
                  <img src={heroimage} alt={t.about.imageAlt} />
                </div>

                {showForm && <ContactModal onClose={() => setShowForm(false)} />}
    </section>
  )
}

export default About
