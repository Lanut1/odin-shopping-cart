import { Button, Container, Typography, useTheme } from "@mui/material";
import React, { useMemo } from "react";
import { CART__PAGE } from "../../assets/constants";
import { useSelector } from "react-redux";
import { getCartItems } from "../../store/selectors";
import CartItem from "./CartItem";
import { ShoppingCartCheckout } from "@mui/icons-material";
import EmptyCart from "./EmptyCart";

const CartPage: React.FC = () => {
  const theme = useTheme();
  const cartItems = useSelector(getCartItems);
  const cartItemsArray = Object.values(cartItems);

  const grandTotal = useMemo(() =>
    cartItemsArray.reduce((total, currentItem) => total + currentItem.item.price * currentItem.quantity, 0)
    , [cartItemsArray]);

  if (cartItemsArray.length === 0) return (<EmptyCart/>);
  
  return (
     <main>
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          p: {xs: 2, md: 5},
          m: 0,
          backgroundColor: theme.palette.customColors.background
          }}
      >
        <Typography variant="h4" sx={{textAlign: {xs: "center", md: "left"}}}>
          {CART__PAGE.YOUR_ORDER}
        </Typography>

        {cartItemsArray?.map(cartItem => (
          <CartItem key={cartItem.item.id} item={cartItem}/>
        ))}

        <Typography variant="h4" sx={{alignSelf: "flex-end"}}>
          {`Total: ${grandTotal}$`}
        </Typography>

        <Button
          variant="contained"
          startIcon={<ShoppingCartCheckout />}
          sx={{alignSelf: "flex-end"}}
        >
          {CART__PAGE.ORDER}
        </Button>
      </Container>
     </main>
  )
}

export default CartPage;