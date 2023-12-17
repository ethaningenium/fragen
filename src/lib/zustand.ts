import { create } from 'zustand';
import { userType } from './type/userdata';

interface userState {
  user: userType | null;
  setUser: (users: userType | null) => void;
}

export const useUserStore = create<userState>()((set) => ({
  user: null,
  setUser: (users) =>
    set(() => {
      if (users) {
        window.localStorage.setItem('token', users.token);
      } else {
        window.localStorage.removeItem('token');
      }

      return { user: users };
    }),
}));
