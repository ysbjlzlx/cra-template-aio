import { types } from 'mobx-state-tree';

const App = types
  .model({
    locale: types.maybeNull(types.string),
  })
  .actions((self) => ({
    setLocale(locale: string) {
      self.locale = locale;
      localStorage.setItem('locale', locale);
    },
  }));

export default App;
