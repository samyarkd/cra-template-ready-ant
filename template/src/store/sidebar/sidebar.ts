import { StateCreator } from "zustand";
import { SidebarState } from "../types/sidebar";

export const createSidebarSlice: StateCreator<SidebarState> = (set) => ({
  collapsed: false,
  toggle: () => set((state) => ({ collapsed: !state.collapsed })),
});
