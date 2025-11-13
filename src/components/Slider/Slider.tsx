import { useContext, useEffect, useState } from "react";
import Parallax from "../Parallax/Parallax";
import './Slider.css'
import { LanguageContext } from "../../LandingPage";





const Slider = () => {

 const context = useContext(LanguageContext);

  if (!context) {
    throw new Error("Slider must be used within a LanguageContext.Provider");
  }

  const { language } = context; // 'ESP' o 'ENG', por ejemplo

  const slides = [
    {
      title:
        language === "ESP"
          ? "Experiencias digitales que inspiran confianza."
          : "Digital experiences that inspire trust.",
      description:
        language === "ESP"
          ? "Diseño y desarrollo de interfaces modernas, rápidas y accesibles usando tecnologías como React, Vite y Tailwind. Creá una presencia online sólida y atractiva para tu negocio."
          : "I design and develop modern, fast and accessible interfaces using technologies like React, Vite and Tailwind. Build a solid and attractive online presence for your business.",
      background: "/background.png",
      topground: "/topground.webp",
    },
    {
      title:
        language === "ESP"
          ? "Arquitecturas robustas para aplicaciones escalables."
          : "Robust architectures for scalable applications.",
      description:
        language === "ESP"
          ? "Implemento servicios en Node.js y NestJS conectados a bases de datos como DynamoDB o MongoDB, asegurando rendimiento, seguridad y facilidad de mantenimiento."
          : "I implement services in Node.js and NestJS connected to databases like DynamoDB or MongoDB, ensuring performance, security, and maintainability.",
      background: "/background2.png",
      topground: "/topground2.webp",
    },
  ];


  const [current, setCurrent] = useState(0);

  // cambiar slide automáticamente cada 6 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 60000);
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
