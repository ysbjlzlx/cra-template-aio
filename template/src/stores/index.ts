import { createContext, useContext } from 'react';
import Auth from './Auth';
import App from './App';
import { Instance, types } from 'mobx-state-tree';

const RootStore = types.model({
  app: types.optional(App, {}),
  auth: types.optional(Auth, {}),
});

const initRootStore = RootStore.create({
  app: App.create({
    locale: localStorage.getItem('locale') || 'zh-CN',
  }),
  auth: Auth.create(),
});

const RootStoreContext = createContext<Instance<typeof RootStore>>(initRootStore);

export const useRootStoreContext = () => useContext(RootStoreContext);
