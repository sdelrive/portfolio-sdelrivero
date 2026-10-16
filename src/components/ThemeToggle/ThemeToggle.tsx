import { FiMoon, FiSun } from 'react-icons/fi';
import { useLanguage } from '../../i18n/LanguageContext';
import type { Theme } from '../../theme';
import './ThemeToggle.css';

type ThemeToggleProps = {
  theme: Theme;
  onToggle: () => void;
};

const ThemeToggle = ({ theme, onToggle }: ThemeToggleProps) => {
  const { t } = useLanguage();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={t.theme.toggle}
      title={t.theme.toggle}
      className="theme-toggle"
      onClick={onToggle}
    >
      <span className="theme-toggle__knob">
        {isDark ? <FiMoon aria-hidden="true" /> : <FiSun aria-hidden="true" />}
      </span>
    </button>
  );
};

export default ThemeToggle;
