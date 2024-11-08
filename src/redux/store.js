import { configureStore } from "@reduxjs/toolkit";
import trucksReducer  from "./trucks/slice";

export const store = configureStore({
  reducer: {
    trucks: trucksReducer,
  },
  // devTools: process.env.NODE_ENV === 'development',
});