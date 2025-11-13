import './styles/landingPage.css';
import ParticlesBackground from './components/Particles/Particles';
import { Carousel } from './components/Carousel/Carousel';
import About from './components/About/About';
import Slider from './components/Slider/Slider';
import { createContext, useState } from 'react';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';




type LanguageContextType = {
  language: string;
  setLanguage: (lang: string) => void;
};

export const LanguageContext = createContext<LanguageContextType | null>(null);




function LandingPage() {


      const lng = navigator.language.includes('es') ? 'ESP' : 'ENG'

  const [language, setLanguage] = useState<string>(lng)



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

            <Slider />

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
                    <h2> { language == 'ESP' ? 'Habilidades' : 'Skills' } </h2>
                    <Carousel />
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact">
                <div className="container">
                    <h2> { language == 'ESP' ? 'Contacto' : 'Contact me' } </h2>
                    <p> { language == 'ESP' ? '¿Quieres trabajar conmigo? ¡Hablemos!' : 'Want to talk? Contact me!' }</p>
                    <a href="mailto:tuemail@example.com" className="btn contact-btn">{ language == 'ENG' ? 'Send me an email' : 'Enviame un correo' }</a>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <p>© 2025 Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>

    </div>

        </LanguageContext.Provider>

    );
}

export default LandingPage;