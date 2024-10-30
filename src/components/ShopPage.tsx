import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch} from "../store";
import { fetchItems } from "../store/itemsSlice";
import ItemCard from "./ItemCard";
import { getAllItems } from "../store/selectors";


const ShopPage: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const items = useSelector(getAllItems);

  useEffect(() => {
    dispatch(fetchItems())
  }, [dispatch])

  return (
    <main>
      {items?.map((item) => (
        <ItemCard item={item}/>
      ))}
    </main>
  )
}

export default ShopPage;