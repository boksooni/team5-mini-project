import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const asynPromotionFetch = createAsyncThunk(
  "promotion/asynPromotionFetch",
  async () => {
    const response = await axios.get("15.164.76.177:8080/products/promotions");
    return response;
  }
);

const PromotionProductSlice = createSlice({
  name: "promotion",
  initialState: {
    products: [],
  },
  extraReducers: (builder) => {
    builder.addCase(asynPromotionFetch.pending, () => {
      console.log("Loading");
    });
    builder.addCase(asynPromotionFetch.fulfilled, (state, { payload }) => {
      state.products = payload;
    });
    builder.addCase(asynPromotionFetch.rejected, () => {
      console.log("Error");
    });
  },
});

export default PromotionProductSlice.reducer;
export const getPromotionData = (state) => state.promotion;
