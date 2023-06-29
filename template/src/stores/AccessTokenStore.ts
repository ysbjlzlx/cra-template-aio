import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

interface AccessToken {
  token: string;
  expiresAt?: Date;
}

interface UseAccessTokenStore {
  accessToken?: AccessToken;
  setAccessToken: (accessToken: AccessToken) => void;
}

const useAccessTokenStore = create<UseAccessTokenStore>()(
  persist(
    (set) => ({
      accessToken: undefined,
      setAccessToken: (accessToken) =>
        set(() => {
          return { accessToken: accessToken };
        }),
    }),
    { name: 'access_token', storage: createJSONStorage(() => localStorage) },
  ),
);

export default useAccessTokenStore;
