
import LanguageDetector from 'i18next-browser-languagedetector';
import i18n from 'i18next';
import {initReactI18next} from 'react-i18next';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'fr',
        debug: true,
        interpolation: {
            escapeValue: false, // not needed for react!!
            formatSeparator: ','
        },
        resources: {
            en: require('public/assets/locales/en.json'),
            fr: require('public/assets/locales//fr.json'),
            es: require('public/assets/locales/es.json'),
            th: require('public/assets/locales/th.json'),
        }
    });

export default i18n;
