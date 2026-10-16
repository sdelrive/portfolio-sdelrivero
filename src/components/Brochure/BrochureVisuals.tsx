import { FiSearch } from 'react-icons/fi';
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

const SearchResult = ({ top = false, titleWidth }: { top?: boolean; titleWidth: number }) => (
  <div className={`serp-result${top ? ' serp-result--top' : ''}`}>
    {top && <span className="serp-result__rank">#1</span>}
    <span className="serp-result__url" />
    <Line width={titleWidth} title={top} />
    <Line width={95} />
    {top && <Line width={60} />}
  </div>
);

export const SeoVisual = () => {
  const { t } = useLanguage();
  const { searchQuery, trafficLabel } = t.brochures.seo;

  return (
    <div className="visual">
      <div className="mock">
        <WindowBar />
        <div className="mock__body">
          <div className="search-bar">
            <FiSearch />
            <span>{searchQuery}</span>
          </div>

          <SearchResult top titleWidth={70} />
          <SearchResult titleWidth={55} />
          <SearchResult titleWidth={50} />
        </div>
      </div>

      <div className="mock-chip">
        <span className="mock-chip__label">{trafficLabel}</span>
        <svg className="mock-chip__trend" viewBox="0 0 64 28">
          <polyline points="3,25 15,21 27,22 39,13 51,9 61,3" />
        </svg>
      </div>
    </div>
  );
};

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
