import { useEffect, useState } from "react";
import Parallax from "../Parallax/Parallax";
import './Slider.css'

const slides = [
  {
    title: "Experiencias digitales que inspiran confianza.",
    description:
      "Diseño y desarrollo de interfaces modernas, rápidas y accesibles usando tecnologías como React, Vite y Tailwind. Creá una presencia online sólida y atractiva para tu negocio.",
    background: "/src/assets/background.png",
    topground: "/src/assets/topground.webp",
  },
  {
    title: "Arquitecturas robustas para aplicaciones escalables.",
    description:
      "Implemento servicios en Node.js y NestJS conectados a bases de datos como DynamoDB o MongoDB, asegurando rendimiento, seguridad y facilidad de mantenimiento.",
     background: "/src/assets/background2.png",
    topground: "/src/assets/topground2.webp",
  }
];


const Slider = () => {


  const [current, setCurrent] = useState(0);

  // cambiar slide automáticamente cada 6 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const { title, description, background, topground} = slides[current];

    const goTo = (index: number) => setCurrent(index);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);
  const next = () => setCurrent((current + 1) % slides.length);


  return (
   <div className="slider-container">
      <button className="nav-btn left" onClick={prev}>
        ❮
      </button>

      <Parallax
        title={title}
        description={description}
        background={background}
        topground={topground}
        key={current}     
      />

      <button className="nav-btn right" onClick={next}>
        ❯
      </button>

      <div className="pagination">
        {slides.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => goTo(i)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Slider
