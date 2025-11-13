import './styles/landingPage.css';
import ParticlesBackground from './components/Particles/Particles';
import { FaBeer } from "react-icons/fa";
import { Carousel } from './components/Carousel/Carousel';
import SkillCard from './components/SkillCard/SkillCard';
import About from './components/About/About';
import Parallax from './components/Parallax/Parallax';
import Slider from './components/Slider/Slider';


function LandingPage() {




    const skills = [{
        name: 'Primer Proyecto Web',
        description: 'Se trata de la primer pagina web que realice en mis inicios. Fue hecha con Vanilla Javascript y sass. Si bien tiene muchas cosas para mejorar, decidi incorporarla al portfolio ya que es mi inicio en el mundo del desarrollo web. Clickea abajo y te especifico que cambiaria de esa pagina.' 
    },
{
    name: 'Tesis de Licenciatura',
    description: 'Tesis de Licenciatura en Astronomia. Si queres saber mas sobre estrellas binarias, y como Python me ayudo a encontrarlas, hace click abajo.'
},
{
    name: 'Chatbot OpenAI',
    description: 'Descripción breve del proyecto'
    }]
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