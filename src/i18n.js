import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Importa los idiomas que necesites
import en from './locales/en.json';
import es from './locales/es.json';

i18n
  .use(initReactI18next)
  .init({
    lng: 'es', // idioma predeterminado
    fallbackLng: 'es', // idioma de reserva en caso de no encontrar el idioma predeterminado
    resources: {
      en: {
        translation: en,
      },
      es: {
        translation: es,
      },
    },
    // Opcional: Si usas interpolaciones
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;

