
import i18n from 'i18next';

const liveLanguages = {
	'GB': 'ENG',
	'ES': 'ESS',
	'FR': 'FRA',
	'TH': 'THI'
};

const getLanguageFromI18n = () => (
	i18n.language.split('-')[0] === 'en' ? 'GB' : i18n.language.split('-')[0].toUpperCase()
);

export {
    liveLanguages,
    getLanguageFromI18n
};