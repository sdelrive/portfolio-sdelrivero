import './styles/landingPage.css';
import ParticlesBackground from './components/Particles/Particles';
import { Carousel } from './components/Carousel/Carousel';
import About from './components/About/About';
import Slider from './components/Slider/Slider';


function LandingPage() {





    return (
        <div  className="app-wrapper" >
            {/* Header */}
        <ParticlesBackground />

        <div className='main'>


            <header className="header space-background">
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
                    <h2>Habilidades</h2>
                    <Carousel />
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="contact">
                <div className="container">
                    <h2>Contacto</h2>
                    <p>¿Quieres trabajar conmigo? ¡Hablemos!</p>
                    <a href="mailto:tuemail@example.com" className="btn contact-btn">Envíame un correo</a>
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
    );
}

export default LandingPage;