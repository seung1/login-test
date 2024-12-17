import type { User } from "firebase/auth";
import { create } from "zustand/react";

export const authStore = create<{
  user: User | null;
  setUser: (user: User | null) => void;
}>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
