import { create } from 'zustand';
import { createJSONStorage,persist } from 'zustand/middleware';

import { defaultLocale } from '../config/locale';

interface LocaleStore {
  locale: string;
  setLocale: (val: string) => void;
}

const useLocaleStore = create<LocaleStore>()(
  persist(
    (set) => ({
      locale: defaultLocale,
      setLocale: (val) =>
        set(() => {
          return { locale: val };
        }),
    }),
    { name: 'locale', storage: createJSONStorage(() => localStorage) },
  ),
);

export default useLocaleStore;
