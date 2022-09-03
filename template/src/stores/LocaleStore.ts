import create from 'zustand';
import { defaultLocale, defaultMessages } from '../config/Locale';

interface LocaleStore {
  locale: string;
  messages: Record<string, string>;
  setLocale: (val: string) => void;
  setMessages: (messages: Record<string, string>) => void;
}

const useLocaleStore = create<LocaleStore>()((set) => ({
  locale: localStorage.getItem('locale') || defaultLocale,
  messages: defaultMessages,
  setLocale: (val) =>
    set(() => {
      localStorage.setItem('locale', val);
      return { locale: val };
    }),
  setMessages: (val) =>
    set(() => {
      return { messages: val };
    }),
}));

export default useLocaleStore;
