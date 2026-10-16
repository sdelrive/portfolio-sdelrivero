import { useLanguage } from '../../i18n/LanguageContext';

// Ilustraciones de cada folleto, hechas con HTML/CSS/SVG (sin imágenes).

const Line = ({ width, title = false }: { width: number; title?: boolean }) => (
  <span className={`mock-line${title ? ' mock-line--title' : ''}`} style={{ width: `${width}%` }} />
);

const WindowBar = () => (
  <div className="mock__bar">
    <span />
    <span />
    <span />
  </div>
);

const ProductCard = ({ badge }: { badge?: string }) => (
  <div className={`mock-card${badge ? ' mock-card--highlight' : ''}`}>
    {badge && <span className="mock-card__badge">{badge}</span>}
    <span className="mock-square" />
    <Line width={80} />
    <Line width={50} />
  </div>
);

export const FrontendVisual = () => (
  <div className="visual">
    <div className="mock">
      <WindowBar />
      <div className="mock__body">
        <div className="mock-nav">
          <span className="mock-logo" />
          <div className="mock-nav__links">
            <Line width={100} />
            <Line width={100} />
            <Line width={100} />
          </div>
        </div>

        <div className="mock-hero">
          <Line width={70} title />
          <Line width={90} />
          <Line width={60} />
          <span className="mock-pill" />
        </div>

        <div className="mock-grid">
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </div>
    </div>

    <div className="mock-phone">
      <span className="mock-logo" />
      <Line width={85} title />
      <Line width={100} />
      <Line width={70} />
      <span className="mock-pill" />
      <span className="mock-square" />
      <span className="mock-square" />
    </div>
  </div>
);

export const BackendVisual = () => (
  <div className="visual">
    <div className="mock">
      <WindowBar />
      <div className="mock__body">
        <svg className="diagram" viewBox="0 0 600 300">
          <g className="diagram__flows">
            <path d="M110 150 H150" />
            <path d="M270 150 C295 150 295 60 320 60" />
            <path d="M270 150 H320" />
            <path d="M270 150 C295 150 295 240 320 240" />
            <path d="M420 60 C445 60 445 95 470 95" />
            <path d="M420 150 C445 150 445 95 470 95" />
            <path d="M420 150 C445 150 445 205 470 205" />
            <path d="M420 240 C445 240 445 205 470 205" />
          </g>

          <g className="diagram__node">
            <rect x="10" y="125" width="100" height="50" rx="10" />
            <text x="60" y="150">Web · App</text>
          </g>
          <g className="diagram__node diagram__node--accent">
            <rect x="150" y="120" width="120" height="60" rx="12" />
            <text x="210" y="150">API Gateway</text>
          </g>
          {[
            { label: 'Auth', y: 35 },
            { label: 'Orders', y: 125 },
            { label: 'Payments', y: 215 },
          ].map(({ label, y }) => (
            <g className="diagram__node" key={label}>
              <rect x="320" y={y} width="100" height="50" rx="10" />
              <text x="370" y={y + 25}>{label}</text>
            </g>
          ))}
          {[
            { label: 'MongoDB', y: 65 },
            { label: 'DynamoDB', y: 175 },
          ].map(({ label, y }) => (
            <g className="diagram__db" key={label}>
              <path d={`M470 ${y + 8} A55 8 0 0 1 580 ${y + 8} V${y + 52} A55 8 0 0 1 470 ${y + 52} Z`} />
              <ellipse cx="525" cy={y + 8} rx="55" ry="8" />
              <text x="525" y={y + 34}>{label}</text>
            </g>
          ))}
        </svg>
      </div>
    </div>
  </div>
);

export const AdTechVisual = () => {
  const { t } = useLanguage();
  const { adLabel, sponsoredLabel, impressionsLabel } = t.brochures.adtech;

  return (
    <div className="visual">
      <div className="mock">
        <WindowBar />
        <div className="mock__body">
          <div className="ad-slot ad-slot--leaderboard">
            <span className="ad-slot__tag">{adLabel}</span>
            728 × 90 · Google Ad Manager
          </div>

          <div className="mock-columns">
            <div className="mock-column">
              <Line width={80} title />
              <Line width={95} />
              <Line width={70} />
              <div className="mock-grid">
                <ProductCard badge={sponsoredLabel} />
                <ProductCard />
                <ProductCard />
              </div>
            </div>

            <div className="ad-slot ad-slot--box">
              <span className="ad-slot__tag">{adLabel}</span>
              300 × 250
            </div>
          </div>
        </div>
      </div>

      <div className="mock-chip">
        <span className="mock-chip__label">{impressionsLabel}</span>
        <div className="mock-chip__bars">
          {[40, 65, 50, 80, 100].map((height, i) => (
            <span key={i} style={{ height: `${height}%` }} />
          ))}
        </div>
      </div>
    </div>
  );
};
