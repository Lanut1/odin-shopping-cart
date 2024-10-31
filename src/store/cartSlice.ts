import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CartItem, CartState } from "./types";

const initialState: CartState = {};

const cartSlice = createSlice({
  name: "cartItems",
  initialState,
  reducers: {
    addToShoppingCart: (state, action: PayloadAction<CartItem>) => {
      const itemId = action.payload.item.id;

      if (state[itemId]) {
        state[itemId].quantity = action.payload.quantity;
      } else {
        state[action.payload.item.id] = action.payload;
      }
      // const index = state.findIndex(position => position.item.id === action.payload.item.id);

      // if (index !== -1) {
      //   state[index] = action.payload;
      // } else {
      //   state.push(action.payload);
      // }
    },
    removeFromCart: (state, action: PayloadAction<string>) => {
      delete state[action.payload];
      // const index = state.findIndex(position => position.item.id === action.payload.item.id);

      // if (index !== -1) {
      //   state.splice(index, 1);
      // }
    },
    clearCart: (state) => {
      for (const itemId in state) {
        delete state[itemId];
      }

    }
    // clearCart: (state) => state.splice(0, state.length)
  }
})

export const { addToShoppingCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;