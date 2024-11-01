import { RootState } from ".";

export const getAllItems = (state: RootState) => state.items.items;

export const getItemQuantity = (state: RootState, id: string): number => state.shoppingCart[id]?.quantity || 0;

export const getCartItems = (state: RootState) => state.shoppingCart;

export const getIsAdded = (state: RootState, id: string): boolean => !!state.shoppingCart[id];

export const getStatus = (state: RootState) => state.items.status;