import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";
//certral storage point
export const store = configureStore({
  reducer: {
    cartState: cartReducer,
  },
});
