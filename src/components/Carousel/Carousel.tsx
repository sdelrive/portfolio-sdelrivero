import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './carousel.css'


// import required modules
import { Autoplay, FreeMode } from 'swiper/modules';


export const Carousel = () => {



const techs = [
  {
    name: 'AWS',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg'
  },
  {
    name: 'React',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
  },
  {
    name: 'JavaScript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg'
  },
  {
    name: 'Kubernetes',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg'
  },
  {
    name: 'CSS3',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg'
  },
  {
    name: 'HTML5',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg'
  },
  {
    name: 'Node.js',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg'
  },
  {
    name: 'GitHub',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg'
  },
  {
    name: 'k6',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/k6/k6-original.svg'
  },
  {
    name: 'TypeScript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg'
  },
  {
    name: 'NestJS',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg'
  },
  {
    name: 'Express',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg'
  },
  {
    name: 'Jira',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg'
  },
  {
    name: 'Docker',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg'
  },
  {
    name: 'MongoDB',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg'
  },
  {
    name: 'Figma',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg'
  },
  {
    name: 'Azure SQL Database',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg'
  },
  {
    name: 'Swagger',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original-wordmark.svg'
  },
  {
    name: 'Bootstrap',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg'
  },
  {
    name: 'GitHub Actions',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg'
  }
];



    return (
    <Swiper
            modules={[Autoplay, FreeMode]}

      spaceBetween={10}
      slidesPerView={5}
      speed={5000}           // controla la velocidad de desplazamiento
      freeMode={{
        enabled: true,       // activa FreeMode
        momentum: false      // desactiva inercia, para velocidad constante
      }}
      autoplay={{
        delay: 0,            // sin pausa entre slides
        disableOnInteraction: false
      }}
        // pagination={{
        //   clickable: false,
        // }}
        // navigation={true}
        className="mySwiper"  
        loop          // duracion de la transición (ms)   
       >
  {techs.map(({ name, src }) => (
    <SwiperSlide key={name}>
      <div className="tech-card">
        <img src={src} alt={name} width={64} height={64} loading="lazy" />
      </div>
    </SwiperSlide>
  ))}
</Swiper>)





    return   <div className='skills-carousel'>
                        <div className="skill-item skill-aws">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" />
                        </div>
                        <div className="skill-item skill-react">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />    
                        </div>
                        <div className="skill-item skill-j">                        
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-plain.svg" />
                        </div>
                        <div className="skill-item skill-kubernetes">                   
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" />
                        </div>
                        <div className="skill-item skill-css">                   
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" />
                        </div>
                         <div className="skill-item skill-css">                   
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" />
                        </div>
                        <div className="skill-item skill-node">                   
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
                        </div>
                        <div className="skill-item skill-github">                   
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" />
                        </div>
                        <div className="skill-item skill-k6">                   
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/k6/k6-original.svg" />
                        </div>
                        <div className="skill-item skill-ts">                   
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-plain.svg" />
                        </div>
                        <div className="skill-item skill-nest">                   
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nestjs/nestjs-original.svg" />
                        </div>
                         <div className="skill-item skill-express">                   
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original-wordmark.svg" />
                        </div>
                         <div className="skill-item skill-jira">                   
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original-wordmark.svg" />
                        </div>
                         <div className="skill-item skill-docker">                   
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-plain-wordmark.svg" />
                        </div>
                         <div className="skill-item skill-mongodb">                   
                           <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original-wordmark.svg" />

                        </div>
                         <div className="skill-item skill-figma">                   
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/figma/figma-original.svg" />
                        </div>
                          <div className="skill-item skill-figma">                   
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg" />

                        </div>
                            <div className="skill-item skill-swagger">                   
                          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/swagger/swagger-original-wordmark.svg" />


                        </div>
                            <div className="skill-item skill-bs">                   
                         <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg" />



                        </div>
                             <div className="skill-item skill-githubactions">                   
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg" />




                        </div>




                    </div>
}