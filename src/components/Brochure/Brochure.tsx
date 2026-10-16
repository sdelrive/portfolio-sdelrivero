import type { CSSProperties, ReactNode } from 'react';
import './Brochure.css';

type BrochureProps = {
  eyebrow: string;
  title: string;
  description: string;
  points: readonly string[];
  techs: readonly string[];
  accent: string;
  accentLight: string;
  reverse?: boolean;
  children: ReactNode;
};

const Brochure = ({ eyebrow, title, description, points, techs, accent, accentLight, reverse = false, children }: BrochureProps) => {
  return (
    <section
      className={`brochure${reverse ? ' brochure--reverse' : ''}`}
      style={{ '--accent-dark': accent, '--accent-light': accentLight } as CSSProperties}
    >
      <div className="brochure__inner">
        <div className="brochure__text">
          <span className="brochure__eyebrow">{eyebrow}</span>
          <h2 className="brochure__title">{title}</h2>
          <p className="brochure__description">{description}</p>

          <ul className="brochure__points">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>

          <ul className="brochure__techs">
            {techs.map((tech) => (
              <li key={tech}>{tech}</li>
            ))}
          </ul>
        </div>

        <div className="brochure__visual" aria-hidden="true">
          {children}
        </div>
      </div>
    </section>
  );
};

export default Brochure;
