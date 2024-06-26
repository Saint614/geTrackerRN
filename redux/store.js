import { configureStore } from "@reduxjs/toolkit";
import { asyncThunkCreator } from "@reduxjs/toolkit";
import { itemsReducer } from "../items/itemsSlice";

export const store = configureStore({
  reducer: {
    items: itemsReducer,
  },
});
