import { create } from "zustand";

const useCountStore = create((set) => ({
  count: 0,
  up: (text) => set((state) => ({ count: state.count + text })),
  down: (text) =>
    set((state) => {
      if (state.count - text < 0) {
        return { count: 0 };
      } else {
        return { count: state.count - text };
      }
    }),
  count: 0,
  up: (text) => set((state) => ({ count: state.count + text })),
  down: (text) =>
    set((state) => {
      if (state.count - text < 0) {
        return { count: 0 };
      } else {
        return { count: state.count - text };
      }
    }),
  count: 0,
  up: (text) => set((state) => ({ count: state.count + text })),
  down: (text) =>
    set((state) => {
      if (state.count - text < 0) {
        return { count: 0 };
      } else {
        return { count: state.count - text };
      }
    }),
}));

export default useCountStore;
