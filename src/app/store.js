import { configureStore } from "@reduxjs/toolkit";
import formReducer from "../features/form/formSlice";

export const store = configureStore({
  reducer: formReducer,
});
