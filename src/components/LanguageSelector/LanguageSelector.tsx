// src/components/LanguageSelector.tsx
import React, {useContext, useState } from "react";
import "./LanguageSelector.css"; 
import { LanguageContext } from "../../LandingPage";





const LanguageSelector: React.FC = () => {
  const [open, setOpen] = useState(false);

      const lng = navigator.language.includes('es') ? 'ESP' : 'ENG'

  const [lang, setLang] = useState(lng);




  // Get context with null check
  const context = useContext(LanguageContext);

  
  // Handle the case where context might be null
  if (!context) {
    throw new Error('LanguageSelector must be used within a LanguageContext.Provider');
  }
  
  const { setLanguage } = context;

  const handleSelect = (newLang: string) => {
    setLanguage(newLang)
    setLang(newLang);
    setOpen(false);
  };

  return (
    <div className="lang-container" onClick={() => setOpen(!open)}>
      <span className="lang-text">{lang}</span>
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
