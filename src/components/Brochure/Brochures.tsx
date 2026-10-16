import { useLanguage } from '../../i18n/LanguageContext';
import Brochure from './Brochure';
import { AdTechVisual, BackendVisual, FrontendVisual } from './BrochureVisuals';

// Para agregar un folleto: sumá una entrada acá y sus textos en translations.ts (brochures).
const BROCHURES = [
  {
    key: 'frontend',
    accent: '#7696ee',
    techs: ['React', 'TypeScript', 'Vite', 'Tailwind'],
    Visual: FrontendVisual,
  },
  {
    key: 'backend',
    accent: '#34d399',
    techs: ['Node.js', 'NestJS', 'MongoDB', 'DynamoDB', 'Docker', 'AWS'],
    Visual: BackendVisual,
  },
  {
    key: 'adtech',
    accent: '#fbbf24',
    techs: ['Google Ad Manager', 'Topsort'],
    Visual: AdTechVisual,
  },
] as const;

const Brochures = () => {
  const { t } = useLanguage();

  return (
    <div id="services" className="brochures">
      {BROCHURES.map(({ key, accent, techs, Visual }, i) => {
        const { eyebrow, title, description, points } = t.brochures[key];

        return (
          <Brochure
            key={key}
            eyebrow={eyebrow}
            title={title}
            description={description}
            points={points}
            techs={techs}
            accent={accent}
            reverse={i % 2 === 1}
          >
            <Visual />
          </Brochure>
        );
      })}
    </div>
  );
};

export default Brochures;
