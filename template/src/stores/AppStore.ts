import create from 'zustand';

interface AppStore {
  locale?: string;
  setLocale: (val: string) => void;
}

const useLocaleStore = create<AppStore>()((set) => ({
  locale: localStorage.getItem('locale') || 'zh-CN',
  setLocale: (val) =>
    set(() => {
      localStorage.setItem('locale', val);
      return { locale: val };
    }),
}));

export default useLocaleStore;
