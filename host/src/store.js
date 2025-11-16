import { create } from "zustand";

if (!window.__GLOBAL_STORE__) {
  window.__GLOBAL_STORE__ = create((set) => ({
    username: "Javidan Gurbanli",
    setUsername: (name) => set({ username: name }),
    theme: "light",
    setTheme: (theme) => set({ theme }),
  }));
}

export const useGlobalStore = window.__GLOBAL_STORE__;

