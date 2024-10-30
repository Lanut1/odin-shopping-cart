import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FieldNumberSpinner } from "../mui-treasury/field-number-spinner";
import { ItemCardProps } from "./types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store";
import { getItemQuantity } from "../store/selectors";
import React, { useState } from "react";
import { addToShoppingCart } from "../store/cartSlice";

const ItemCard: React.FC<ItemCardProps> = ({item}) => {
  const dispatch = useDispatch<AppDispatch>();
  const quantity = useSelector((state: RootState) => getItemQuantity(state, item.id));
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const handleInputChange = (value: number | undefined) => {
    if (typeof value === "undefined") return;

    setItemQuantity(value);
  }

  const handleCartItem = () => {
    if (itemQuantity > 0) {
      dispatch(addToShoppingCart({item: item, quantity: itemQuantity}));
    }
  }


  return (
    <Card>
      <CardMedia
        image={item.image}
        sx={{ height: 140 }}
      />
      <CardContent>
        <Typography>{item.name}</Typography>
        <Typography>{item.price}</Typography>

        <FieldNumberSpinner value={itemQuantity} onChange={handleInputChange}/>
        <Button onClick={handleCartItem}>Add to cart</Button>
      </CardContent>
    </Card>
  )
}

export default ItemCard;