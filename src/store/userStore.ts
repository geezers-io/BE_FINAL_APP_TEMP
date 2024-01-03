import { create, StateCreator } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { User } from '@/api/AuthService';

interface UserStore {
  user?: User;
  setUser: (u?: User) => void;
}

const createUserSlice: StateCreator<UserStore, [], [], UserStore> = set => ({
  user: undefined,
  setUser: (user?: User) => set({ user }),
});

const userStore = create(
  persist(createUserSlice, {
    name: 'user',
    storage: createJSONStorage(() => localStorage),
  })
);

export default userStore;
