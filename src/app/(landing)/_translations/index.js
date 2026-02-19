import translationsData from "./translations.json";

const SUPPORTED_LANGS = ["en", "es"];
const DEFAULT_LANG = "en";

export function getTranslations(lang) {
  const normalizedLang = lang && SUPPORTED_LANGS.includes(lang) ? lang : DEFAULT_LANG;
  return translationsData[normalizedLang] || translationsData[DEFAULT_LANG];
}
