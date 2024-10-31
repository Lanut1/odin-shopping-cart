import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch} from "../store";
import { fetchItems } from "../store/itemsSlice";
import ItemCard from "./ItemCard";
import { getAllItems } from "../store/selectors";
// import { Box, Container } from "@mui/material";
import ShopIntroSection from "./ShopIntroSection";
import { Grid2 } from "@mui/material";


const ShopPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector(getAllItems);

  useEffect(() => {
    dispatch(fetchItems())
  }, [dispatch]) 

  return (
    <main>
      <ShopIntroSection />
      <Grid2 container spacing={5} sx={{alignItems: "center", justifyContent: "center", py: "2rem", px: "1rem" }}>
        {items?.map((item) => (
          <ItemCard key={item.id} item={item}/>
        ))}
      </Grid2>
    </main>
  )
}

export default ShopPage;