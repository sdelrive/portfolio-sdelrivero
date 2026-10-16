import './styles/landingPage.css';
import ParticlesBackground from './components/Particles/Particles';
import { Carousel } from './components/Carousel/Carousel';
import About from './components/About/About';
import Brochures from './components/Brochure/Brochures';
import { useEffect, useState } from 'react';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import ThemeToggle from './components/ThemeToggle/ThemeToggle';
import { applyTheme, getInitialTheme, type Theme } from './theme';
import { LanguageContext } from './i18n/LanguageContext';
import { translations, type Language } from './i18n/translations';
import { CONTACT_EMAIL, LINKEDIN_URL } from './constants';
import { FaEnvelope, FaLinkedin } from 'react-icons/fa';


function LandingPage() {

    const [language, setLanguage] = useState<Language>('ESP');
    const t = translations[language];

    const [theme, setTheme] = useState<Theme>(getInitialTheme);

    useEffect(() => {
        applyTheme(theme);
    }, [theme]);

    return (
        <LanguageContext.Provider value={{ language, setLanguage }}>
        <div  className="app-wrapper" >
            {/* Header */}
        <ParticlesBackground theme={theme} />

        <div className='main'>

            <header className="header space-background">

                <div className="header-controls">
                    <ThemeToggle
                        theme={theme}
                        onToggle={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    />
                    <LanguageSelector />
                </div>
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
                        <a href={`mailto:${CONTACT_EMAIL}`} className="contact-link">
                            <FaEnvelope aria-hidden="true" /> {CONTACT_EMAIL}
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
