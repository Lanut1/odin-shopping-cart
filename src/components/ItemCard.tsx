import { Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import { FieldNumberSpinner } from "../mui-treasury/field-number-spinner";
import { ItemCardProps } from "./types";

const ItemCard: React.FC<ItemCardProps> = ({item}) => {
  return (
    <Card>
      <CardMedia
        image={item.image}
      />
      <CardContent>
        <Typography>{item.name}</Typography>
        <Typography>{item.price}</Typography>

        <FieldNumberSpinner/>
        <Button>Add to cart</Button>
      </CardContent>
    </Card>
  )
}

export default ItemCard;