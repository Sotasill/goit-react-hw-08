import { createSlice } from '@reduxjs/toolkit';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import uk from './uk';
import en from './en';

// Получаем сохраненный язык из localStorage или используем украинский по умолчанию
const savedLanguage = localStorage.getItem('language') || 'uk';

// Инициализация i18next
i18n
  .use(initReactI18next)
  .init({
    resources: {
      uk: { translation: uk },
      en: { translation: en }
    },
    lng: savedLanguage,
    fallbackLng: 'uk',
    interpolation: {
      escapeValue: false,
    },
  });

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    currentLanguage: savedLanguage
  },
  reducers: {
    toggleLanguage: (state) => {
      state.currentLanguage = state.currentLanguage === 'uk' ? 'en' : 'uk';
      localStorage.setItem('language', state.currentLanguage);
      i18n.changeLanguage(state.currentLanguage);
    },
  },
});

export const { toggleLanguage } = languageSlice.actions;
export const selectLanguage = (state) => state.language.currentLanguage;
export default languageSlice.reducer;
