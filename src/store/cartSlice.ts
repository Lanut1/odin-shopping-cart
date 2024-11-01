import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "./types";

const initialState: CartState = {
  items: {},
  counter: 0
};

const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addOrUpdateShoppingCart: (state, action: PayloadAction<CartItem>) => {
      const itemId = action.payload.item.id;

      if (state.items[itemId]) {
        state.items[itemId].quantity = action.payload.quantity;
      } else {
        state.items[action.payload.item.id] = action.payload;
        state.counter += 1;
      }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      delete state.items[action.payload];
      state.counter -= 1;
    },
    clearCart: (state) => {
      state.items = {};
      state.counter = 0;
    }
  }
})

export const { addOrUpdateShoppingCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;