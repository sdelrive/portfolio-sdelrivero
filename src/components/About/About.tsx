import { useContext } from 'react';
import { LanguageContext } from '../../LandingPage';
import heroimage from '/hero_setup.png';


const About = () => {

    const context = useContext(LanguageContext);

  // Handle the case where context might be null
  if (!context) {
    throw new Error('LanguageSelector must be used within a LanguageContext.Provider');
  }
  
  const { language } = context;
  return (
     <section id="about" className="about">
                <div className="container about-description">
                    <h2>{ language == 'ENG' ? 'Welcome' : 'Bienvenidos'}</h2>
                    <p>
                      
                      
                      { language == 'ENG' ? 
                      
                      'My name is Santiago del Rivero, Im a full-stack developer from Uruguay currently living in Montevideo. I have experience building software, services, and high-traffic websites that handle thousands of users per day, ensuring stability, scalability, resilience, and the use of modern technological solutions. I also have experience leading teams to guarantee the highest product quality.'
                       : '  Me nombre es Santiago del Rivero, soy desarrollador full-stack uruguayo viviendo en Montevideo, UY. Tengo experiencia en el desarrollo de software, desarrollo de servicios y sitios web de calidad con flujos de miles de personas por dia, garantizando servicios estables, escalables, resilientes y aplicando las mas modernas soluciones tecnologias. Tambien cuento con experiencia liderando personas para garantizar la mejor calidad del producto.'}
                      
                      
                    
                      <hr></hr>
                      
                      
                      </p>
                </div>
                <div className="container about-image">
                  <img src={heroimage} />
                </div>
    </section>
  )
}

export default About
