import { create } from "zustand";

const useAuthStore = create((set) => ({
  user: null,
  setUser: () => set((value) => ({ user: value })),
}));

export default useAuthStore;
