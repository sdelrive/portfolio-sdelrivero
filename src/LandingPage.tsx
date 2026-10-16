import './styles/landingPage.css';
import ParticlesBackground from './components/Particles/Particles';
import { Carousel } from './components/Carousel/Carousel';
import About from './components/About/About';
import Brochures from './components/Brochure/Brochures';
import { useState } from 'react';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import { LanguageContext } from './i18n/LanguageContext';
import { translations, type Language } from './i18n/translations';
import { CONTACT_EMAIL, LINKEDIN_URL, PHONE_NUMBER, WHATSAPP_URL } from './constants';
import { FaLinkedin, FaWhatsapp } from 'react-icons/fa';


function LandingPage() {

    const [language, setLanguage] = useState<Language>(
        navigator.language.includes('es') ? 'ESP' : 'ENG'
    );
    const t = translations[language];

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
        <div  className="app-wrapper" >
            {/* Header */}
        <ParticlesBackground />

        <div className='main'>

            <header className="header space-background">

                <LanguageSelector />
                <div className='header-decorator'>
                </div>
                {/* <div className="container">
                    <h1 className="logo">Santiago's Portfolio</h1>
                    <nav>
                        <ul className="nav-links">
                            <li><a href="#about" className="nav-link">Acerca de mi</a></li>
                            <li><a href="#projects" className="nav-link">Proyectos</a></li>
                            <li><a href="#contact" className="nav-link">Contactos</a></li>
                        </ul>
                    </nav>
                </div> */}
            </header>

            {/* About Section */}
            <About />

            {/* Services Section */}
            <Brochures />

            {/* Projects Section */}
            {/* <section id="projects" className="projects">
                <div className="container">
                    <h2>Proyectos</h2>
                    <div className="project-list">
                        {
                            skills.map( (el) => < SkillCard  name={el.name} description = {el.description}/>)
                        }
                    </div>
                </div>
            </section> */}

            {/* Skills Section */}
            <section id="skills" className="skills">
                <div className="container">
                    <h2>{t.skills.title}</h2>
                    <Carousel />
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact">
                <div className="container">
                    <h2>{t.contact.title}</h2>
                    <p>{t.contact.text}</p>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="btn contact-btn">{t.contact.button}</a>
                    <div className="contact-links">
                        <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="contact-link">
                            <FaLinkedin aria-hidden="true" /> LinkedIn
                        </a>
                        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="contact-link">
                            <FaWhatsapp title="WhatsApp" /> {PHONE_NUMBER}
                        </a>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <p>© {new Date().getFullYear()} Santiago del Rivero. {t.footer.rights}</p>
                </div>
            </footer>
        </div>

    </div>

        </LanguageContext.Provider>

    );
}

export default LandingPage;
