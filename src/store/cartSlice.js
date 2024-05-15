import { createSlice } from "@reduxjs/toolkit";

// inistall stage
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartList: [],
    total: 0,
  },
  reducers: {
    add(state, action) {
      const updateCartList = state.cartList.concat(action.payload);
      const total = state.total + action.payload.price;
      return { ...state, total: total, cartList: updateCartList };
    },
    remove(state, action) {
      const updateCartList = state.cartList.filter(
        (item) => item.id !== action.payload.id
      );
      const total = state.total - action.payload.price;
      return { ...state, total: total, cartList: updateCartList };
    },
  },
});
export const { add, remove } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
