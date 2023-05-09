import { create } from "zustand";
import { devtools } from "zustand/middleware";

export const useUserData = create(
  devtools((set) => ({
    id: 1,
    context: [{ id: 0, msg: "Salam necə kömək edə bilərəm?", isUser: false }],
    updateId: (newId) => set((state) => ({ ...state, id: newId })),
    updateContext: (newMessage, isUser) =>
      set((state) => ({
        ...state,
        context: [
          ...state.context,
          { id: state.context.length, msg: newMessage, isUser },
        ],
      })),
    clearContext: () =>
      set(() => ({
        context:[{ id: 0, msg: "Salam necə kömək edə bilərəm?", isUser: false }],
      })),
  }))
);
