import { Card, CardContent, CardMedia, IconButton, Typography } from "@mui/material";
import { CartItemProps } from "../types";
import { FieldNumberSpinner } from "../../mui-treasury/field-number-spinner";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { addOrUpdateShoppingCart, removeFromCart } from "../../store/cartSlice";
import { useState } from "react";
import { Delete } from "@mui/icons-material";

const CartItem: React.FC<CartItemProps> = ({item}) => {
  const dispatch = useDispatch<AppDispatch>();
  const [quantity, setQuantity] = useState(item.quantity);

  const handleItemDelete = () => {
    dispatch(removeFromCart(item.item.id));
  } 

  const handleItemChange = (value: number | undefined) => {
    if (typeof value === "undefined") return;

    if (value === 0) {
      handleItemDelete();
    } else {
      setQuantity(value);
      dispatch(addOrUpdateShoppingCart({...item, quantity: value}));
    }
  }

  const totalPrice = item.quantity * item.item.price;

  return (
    <Card sx={{display: "flex", justifyContent: "space-between", height: '15vh'}} elevation={5}>
      <CardMedia 
        image={item.item.image}
        sx={{width: '15vw', objectFit: "cover"}}
        />
      <CardContent sx={{display: "flex", gap: "1rem", alignItems: "center"}}>
        <Typography variant="h5">{item.item.name}</Typography>
        <Typography variant="h5">{`${item.item.price}$`}</Typography>
        <FieldNumberSpinner value={quantity} onChange={handleItemChange}/>
        <Typography variant="h5">{`${totalPrice}$`}</Typography>
        <IconButton onClick={handleItemDelete}><Delete/></IconButton>
      </CardContent>
    </Card>
  )
}

export default CartItem;