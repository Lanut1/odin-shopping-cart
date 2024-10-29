import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem } from "./types";

const initialState: CartItem[] = [];

const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addToShoppingCart: (state, action: PayloadAction<CartItem>) => {
      const index = state.findIndex(position => position.item.id === action.payload.item.id);

      if (index !== -1) {
        state[index] = action.payload;
      } else {
        state.push(action.payload);
      }
    },
    removeFromCart: (state, action: PayloadAction<CartItem>) => {
      const index = state.findIndex(position => position.item.id === action.payload.item.id);

      if (index !== -1) {
        state.splice(index, 1);
      }
    },
    clearCart: (state) => state.splice(0, state.length)
  }
})

export const { addToShoppingCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;