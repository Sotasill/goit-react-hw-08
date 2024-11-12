import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './en';
import uk from './uk';

const savedLanguage = localStorage.getItem('language') || 'uk';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      uk: { translation: uk }
    },
    lng: savedLanguage,
    fallbackLng: 'uk',
    interpolation: {
      escapeValue: false,
    },
  });

// Сохраняем выбранный язык при его изменении
i18n.on('languageChanged', (lng) => {
  localStorage.setItem('language', lng);
});

export default i18n;