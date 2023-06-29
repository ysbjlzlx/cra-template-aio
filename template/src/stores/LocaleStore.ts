import { create } from 'zustand';
import { defaultLocale } from '../config/locale';

interface LocaleStore {
  locale: string;
  setLocale: (val: string) => void;
}

const useLocaleStore = create<LocaleStore>()((set) => ({
  locale: localStorage.getItem('locale') || defaultLocale,
  setLocale: (val) =>
    set(() => {
      localStorage.setItem('locale', val);
      return { locale: val };
    }),
}));

export default useLocaleStore;
