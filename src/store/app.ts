import { create } from "zustand";

// Step 1: placeholder state so the status bar has something to read.
// Real project/tool/scope/schedule state is wired in later steps.
interface AppState {
  projectName: string | null;
  toolCount: number;
  scopeCount: number;
  assetCount: number;
  scheduleCount: number;
  toast: string | null;
  showToast: (message: string) => void;
}

// Module-level so a new toast cancels the previous one's timer.
let toastTimer: ReturnType<typeof setTimeout> | undefined;

export const useAppStore = create<AppState>((set) => ({
  projectName: null,
  toolCount: 0,
  scopeCount: 0,
  assetCount: 0,
  scheduleCount: 0,
  toast: null,
  showToast: (message) => {
    clearTimeout(toastTimer);
    set({ toast: message });
    toastTimer = setTimeout(() => set({ toast: null }), 3000);
  },
}));