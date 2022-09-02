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
  },
  extraReducers: (builder) => {
    builder.addCase(getSearchedProduct.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default searchedProductSlice;
export { getSearchedProduct };
