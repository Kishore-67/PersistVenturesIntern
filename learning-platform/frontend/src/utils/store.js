import { create } from 'zustand';

const useStore = create((set) => ({
  user: null,
  isAuthenticated: false,
  challenges: [],
  setUser: (user) => set({ user, isAuthenticated: !!user }),
  setChallenges: (challenges) => set({ challenges }),
  logout: () => {
    localStorage.removeItem('token');
    set({ user: null, isAuthenticated: false });
  },
}));

export default useStore;
