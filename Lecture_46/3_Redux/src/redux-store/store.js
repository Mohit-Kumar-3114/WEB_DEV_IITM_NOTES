import { configureStore } from "@reduxjs/toolkit";
import likeReducer from "./slices/likeSlice";
import shareReducer from "./slices/shareSlice";

export const store = configureStore({
  reducer: {
    likeReducer,
    shareReducer
  },
});