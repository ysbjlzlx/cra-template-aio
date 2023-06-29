import { InitOptions } from 'i18next';

export const defaultLocale = 'zh-Hans';

export const initOptions: InitOptions = {
  backend: {
    // 網頁載入時去下載語言檔的位置
    loadPath: '/locales/{{lng}}/{{ns}}.json',
  },
  // lng: 'zh-Hans', // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
  // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
  // if you're using a language detector, do not define the lng option
  fallbackLng: {
    default: ['en'],
    zh: ['zh-Hans'],
    'zh-CN': ['zh-Hans'],
  },
  supportedLngs: ['zh-Hans', 'en'],
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
  detection: {},
};
