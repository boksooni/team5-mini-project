import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllProduct = createAsyncThunk(
  "allProductSlice/getAllProduct",
  async () => {
    const data = await axios.get("url");
    return data.value;
  }
);

const allProductSlice = createSlice({
  name: "allProductSlice",
  initialState: {
    data: [],
  },
  extraReducers: (builder) => {
    builder.addCase(getAllProduct.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default allProductSlice;
export { getAllProduct };
