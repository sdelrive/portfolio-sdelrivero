import { useLanguage } from '../../i18n/LanguageContext';
import Brochure from './Brochure';
import { AdTechVisual, FrontendVisual, SeoVisual } from './BrochureVisuals';

// Para agregar un folleto: sumá una entrada acá y sus textos en translations.ts (brochures).
// accent es el color en modo oscuro; accentLight, una versión más oscura que se lee sobre fondo claro.
const BROCHURES = [
  {
    key: 'frontend',
    accent: '#7696ee',
    accentLight: '#4f6bd8',
    techs: ['React', 'TypeScript', 'Vite', 'Tailwind'],
    Visual: FrontendVisual,
  },
  {
    key: 'seo',
    accent: '#34d399',
    accentLight: '#047857',
    techs: ['Google Search Console', 'Google Analytics', 'Lighthouse', 'Schema.org'],
    Visual: SeoVisual,
  },
  {
    key: 'adtech',
    accent: '#fbbf24',
    accentLight: '#b45309',
    techs: ['Google Ad Manager', 'Topsort'],
    Visual: AdTechVisual,
  },
] as const;

const Brochures = () => {
  const { t } = useLanguage();

  return (
    <div id="services" className="brochures">
      {BROCHURES.map(({ key, accent, accentLight, techs, Visual }, i) => {
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
            accentLight={accentLight}
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
