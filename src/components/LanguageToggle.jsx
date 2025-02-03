import React from 'react';
import { useTranslation } from 'react-i18next';

const LanguageToggle = () => {
  const { i18n } = useTranslation();

  return (
    <div className="language-toggle">
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={i18n.language === 'en' ? 'active' : ''}
      >
        EN
      </button>
      <button
        onClick={() => i18n.changeLanguage('bn')}
        className={i18n.language === 'bn' ? 'active' : ''}
      >
        BN
      </button>
    </div>
  );
};

export default LanguageToggle;