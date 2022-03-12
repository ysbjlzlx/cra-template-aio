import { types } from 'mobx-state-tree';

const Auth = types
  .model({
    username: types.maybeNull(types.string),
  })
  .actions((self) => ({
    login({ username }: { username: string }) {
      self.username = username;
    },

    logout() {
      self.username = null;
    },
  }));

export default Auth;
