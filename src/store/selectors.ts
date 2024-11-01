import { RootState } from ".";

export const getAllItems = (state: RootState) => state.items.items;

export const getItemQuantity = (state: RootState, id: string): number => state.shoppingCart.items[id]?.quantity || 0;

export const getCartItems = (state: RootState) => state.shoppingCart.items;

export const getIsAdded = (state: RootState, id: string): boolean => !!state.shoppingCart.items[id];

export const getCartQuantity = (state: RootState) => state.shoppingCart.counter;

export const getStatus = (state: RootState) => state.items.status;