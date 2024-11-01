import { Button, Typography } from "@mui/material";
import React from "react";
import { CART__PAGE } from "../../assets/constants";
import { useSelector } from "react-redux";
import { getCartItems } from "../../store/selectors";
import CartItem from "./CartItem";
import { ShoppingCartCheckout } from "@mui/icons-material";

const CartPage: React.FC = () => {
  const cartItems = useSelector(getCartItems);
  const cartItemsArray = Object.values(cartItems);
  const grandTotal = cartItemsArray.reduce((total, currentItem) => total + currentItem.item.price * currentItem.quantity, 0)

  return (
     <main>
      <Typography variant="h4">{CART__PAGE.YOUR_ORDER}</Typography>
      {cartItemsArray?.map(cartItem => (
        <CartItem item={cartItem}/>
      ))}
      <Typography variant="h4">{`Total: ${grandTotal}$`}</Typography>
      <Button
        variant="contained"
        sx={{backgroundColor: "red", color: "white"}}
        startIcon={<ShoppingCartCheckout />}
      >
        {CART__PAGE.ORDER}
      </Button>
     </main>
  )
}

export default CartPage;