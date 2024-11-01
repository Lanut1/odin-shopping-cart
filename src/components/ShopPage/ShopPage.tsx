import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch} from "../../store";
import { fetchItems } from "../../store/itemsSlice";
import { getAllItems, getStatus } from "../../store/selectors";
import ShopIntroSection from "./ShopIntroSection";
import { CircularProgress, Grid2 } from "@mui/material";
import ShopItem from "./ShopItem";
import ErrorPage from "../ErrorPage";


const ShopPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector(getAllItems);
  const status = useSelector(getStatus);

  useEffect(() => {
    dispatch(fetchItems())
  }, [dispatch]) 

  if (status === "loading") return <CircularProgress/>;

  if (status === "failed") return <ErrorPage/>

  return (
    <main>
      <ShopIntroSection />
      <Grid2 container spacing={5} sx={{alignItems: "center", justifyContent: "center", py: "2rem", px: "1rem" }}>
        {items?.map((item) => (
          <ShopItem key={item.id} item={item}/>
        ))}
      </Grid2>
    </main>
  )
}

export default ShopPage;