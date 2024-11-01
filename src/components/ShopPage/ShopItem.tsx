import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FieldNumberSpinner } from "../../mui-treasury/field-number-spinner";
import { ShopItemProps } from "../types";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { getIsAdded, getItemQuantity} from "../../store/selectors";
import React, { useState } from "react";
import { addOrUpdateShoppingCart, removeFromCart } from "../../store/cartSlice";
import { SHOP__PAGE } from "../../assets/constants";

const ShopItem: React.FC<ShopItemProps> = ({item}) => {
  const dispatch = useDispatch<AppDispatch>();
  const quantity = useSelector((state: RootState) => getItemQuantity(state, item.id));
  const isAdded = useSelector((state: RootState) => getIsAdded(state, item.id));
  const [itemQuantity, setItemQuantity] = useState(quantity);

  const handleInputChange = (value: number | undefined) => {
    if (typeof value === "undefined") return;

    setItemQuantity(value)
  }

  const handleCartItem = () => {
    if (itemQuantity > 0 && itemQuantity !== quantity) {
      dispatch(addOrUpdateShoppingCart({item: item, quantity: itemQuantity}));
    } else if (isAdded && itemQuantity === 0) {
      dispatch(removeFromCart(item.id))
    }
  } 


  return (
    <Card  elevation={5} sx={{ width: 300, borderRadius: 5 }}>
      <CardMedia
        image={item.image}
        sx={{ height: 300, objectFit: "cover" }}
      />
      <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", px: 5, gap: "0.5rem"}}>
        <Box sx={{display: "flex", justifyContent: "space-between", width: "100%"}}>
          <Typography variant="h6">{item.name}</Typography>
          <Typography variant="h6">{`${item.price}$`}</Typography>
        </Box>
        <FieldNumberSpinner value={itemQuantity} onChange={handleInputChange}/>
        <Button onClick={handleCartItem}>{!isAdded ? `${SHOP__PAGE.ADD}` : itemQuantity === 0 ? `${SHOP__PAGE.REMOVE}` : `${SHOP__PAGE.UPDATE}`}</Button>
      </CardContent>
    </Card>
  )
}

export default ShopItem;