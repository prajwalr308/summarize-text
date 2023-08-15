import { create } from "zustand";

type InputStore = {
    inputText: string;
    setInputText: (inputText: string) => void;
};
export const useInputStore = create<InputStore>((set) => ({
  inputText: '',
  setInputText: (inputText) => set({ inputText }),
}));


type summaryStore = {
    summary: string;
    setSummary: (inputText: string) => void;
};
export const useSummaryStore = create<summaryStore>((set) => ({
    summary: '',
    setSummary: (summary) => set({ summary }),
}));