import create from "zustand";
import { createSidebarSlice } from "./sidebar/sidebar";

import { devtools } from "zustand/middleware";
import { Store } from "./types/sidebar";

export const useStore = create<Store>()(
  devtools((...set) => ({
    ...createSidebarSlice(...set),
  }))
);
