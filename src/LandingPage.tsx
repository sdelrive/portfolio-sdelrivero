import './styles/landingPage.css';
import ParticlesBackground from './components/Particles/Particles';
import { FaBeer } from "react-icons/fa";
import { Carousel } from './components/Carousel/Carousel';


function LandingPage() {
    return (
        <div  className="app-wrapper" >
            {/* Header */}
        <ParticlesBackground />

        <div className='main'>


            <header className="header space-background">
                <div className="container">
                    <h1 className="logo">Santiago's Portfolio</h1>
                    <nav>
                        <ul className="nav-links">
                            <li><a href="#about" className="nav-link">About me</a></li>
                            <li><a href="#projects" className="nav-link">Projects</a></li>
                            <li><a href="#contact" className="nav-link">Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </header>



            {/* About Section */}
            <section id="about" className="about">
                <div className="container">
                    <h2>Sobre mí</h2>
                    <p>Soy un Software Engineer con mas de 3 anos de experiencia en el desarrollo de aplicaciones web y servicios de back-end</p>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="projects">
                <div className="container">
                    <h2>Proyectos</h2>
                    <div className="project-list">
                        <div className="project-item">
                            <h3>Proyecto 1</h3>
                            <p>Descripción breve del proyecto.</p>
                            <a href="#" className="btn">Ver más</a>
                        </div>
                        <div className="project-item">
                            <h3>Proyecto 2</h3>
                            <p>Descripción breve del proyecto.</p>
                            <a href="#" className="btn">Ver más</a>
                        </div>
                        <div className="project-item">
                            <h3>Proyecto 3</h3>
                            <p>Descripción breve del proyecto.</p>
                            <a href="#" className="btn">Ver más</a>
                        </div>
                    </div>
                </div>
            </section>

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
                    <a href="mailto:tuemail@example.com" className="btn">Envíame un correo</a>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <p>© 2023 Mi Portafolio. Todos los derechos reservados.</p>
                </div>
            </footer>
        </div>

    </div>
    );
}

export default LandingPage;