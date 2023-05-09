import { configureStore } from "@reduxjs/toolkit";
import { stageApi } from "../services/stage";
import stageFormReducer from "./stages/stageFormSlice";

export const store = configureStore({
  reducer: {
    [stageApi.reducerPath]: stageApi.reducer,
    stageForm: stageFormReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(stageApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
