import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getSearchedProduct = createAsyncThunk(
  "searchedProductSlice/getAllProduct",
  async () => {
    const data = await axios.get("url");
    return data.value;
  }
);

const searchedProductSlice = createSlice({
  name: "searchedProductSlice",
  initialState: {
    data: [],
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder.addCase(getSearchedProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getSearchedProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getSearchedProduct.rejected, (state) => {
      state.isLoading = false;
      throw new Error("FETCHING ERROR");
    });
  },
});

export default searchedProductSlice;
export { getSearchedProduct };
