import { MeatItem } from "../api/types";

export interface CartItem {
  item: MeatItem;
  quantity: number;
}

export interface CartState {
  items: {[itemId: string]: CartItem};
  counter: number;
}

export interface ItemsState {
  items: MeatItem[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
}