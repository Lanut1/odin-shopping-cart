import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ItemsState } from "./types";
import { fetchMeatItems } from "../api/mockApi";
import { MeatItem } from "../api/types";

const initialState: ItemsState = {
  items: [],
  status: "idle"
}

export const fetchItems = createAsyncThunk( "items/fetchItems", async () => {
  return await fetchMeatItems();
});

const itemsSlice = createSlice({
  name: "meatItems",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchItems.fulfilled, (state, action: PayloadAction<MeatItem[]>) => {
        state.status = "succeeded";
        state.items = action.payload;
      })
      .addCase(fetchItems.rejected, (state) => {
        state.status = "failed"
      })
  }
})

export default itemsSlice.reducer;