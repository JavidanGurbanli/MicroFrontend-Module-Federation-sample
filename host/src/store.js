import { create } from "zustand";
import { persist } from "zustand/middleware";

if (!window.__GLOBAL_STORE__) {
  window.__GLOBAL_STORE__ = create(
    persist(
      (set) => ({
        username: "Javidan Gurbanli",
        setUsername: (name) => set({ username: name }),

        theme: "light",
        setTheme: (theme) => set({ theme }),
      }),
      {
        name: "global-store",
      }
    )
  );
}

export const useGlobalStore = window.__GLOBAL_STORE__;
