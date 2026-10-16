// src/components/LanguageSelector.tsx
import React, { useState } from "react";
import "./LanguageSelector.css";
import { useLanguage } from "../../i18n/LanguageContext";
import type { Language } from "../../i18n/translations";


const LanguageSelector: React.FC = () => {
  const [open, setOpen] = useState(false);

  const { language, setLanguage } = useLanguage();

  const handleSelect = (newLang: Language) => {
    setLanguage(newLang);
    setOpen(false);
  };

  return (
    <div className="lang-container" onClick={() => setOpen(!open)}>
      <span className="lang-text">{language}</span>
      <svg
        className={`lang-arrow ${open ? "open" : ""}`}
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>

      {open && (
        <ul className="lang-dropdown">
          <li onClick={() => handleSelect("ENG")}>ENG</li>
          <li onClick={() => handleSelect("ESP")}>ESP</li>
        </ul>
      )}
    </div>
  );
};

export default LanguageSelector;
