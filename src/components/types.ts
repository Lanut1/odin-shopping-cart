import { MeatItem } from "../api/types";
import { CartItem } from "../store/types";

export interface ShopItemProps {
  item: MeatItem;
}

export interface CartItemProps {
  item: CartItem;
}