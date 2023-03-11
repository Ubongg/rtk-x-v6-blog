import { configureStore } from "@reduxjs/toolkit";
import blogListReducer from "./features/blog/blogListSlice";

export const store = configureStore({
  reducer: {
    blogs: blogListReducer,
  },
});
