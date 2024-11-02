import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch} from "../../store";
import { fetchItems } from "../../store/itemsSlice";
import { getAllItems, getStatus } from "../../store/selectors";
import ShopIntroSection from "./ShopIntroSection";
import { Container, Grid2, useTheme } from "@mui/material";
import ShopItem from "./ShopItem";
import ErrorPage from "../ErrorPage";
import LoadingPage from "../LoadingPage";


const ShopPage: React.FC = () => {
  const theme = useTheme();
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector(getAllItems);
  const status = useSelector(getStatus);

  useEffect(() => {
    dispatch(fetchItems())
  }, [dispatch]) 

  if (status === "loading") return <LoadingPage/>;

  if (status === "failed") return <ErrorPage/>

  return (
    <main>
      <Container disableGutters maxWidth={false} sx={{backgroundColor: theme.palette.customColors.background}}>
        <ShopIntroSection />
        <Grid2 container spacing={5} sx={{alignItems: "center", justifyContent: "center", py: "2rem", px: "1rem" }}>
          {items?.map((item) => (
            <ShopItem key={item.id} item={item}/>
          ))}
        </Grid2>
      </Container>

    </main>
  )
}

export default ShopPage;