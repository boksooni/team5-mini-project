import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const getAllProduct = createAsyncThunk(
  "allProductSlice/getAllProduct",
  async () => {
    const data = await axios.get("https://www.needmoney.ml/products/", {
      headers: {
        Authorization: `eyJ0eXAiOiJKV1QiLCJyZWdEYXRlIjoxNjYyMDkyNTU3NTQ0LCJhbGciOiJIUzI1NiJ9.eyJ1c2VyIjp7ImlkIjoyLCJ1c2VybmFtZSI6ImNjIiwicGFzc3dvcmQiOiIkMmEkMTAkOEZub2FmMzFBQWN6RG9kNHJyeDRoT2YwUGgxS3dXOUgvaDhRQkd3YzU2aUE4cU1Gb1dwblciLCJuYW1lIjoiY-unqCIsImpvYiI6bnVsbCwiYWdlIjowfSwiaWF0IjoxNjYyMDkyNTEwLCJleHAiOjE2NjIwOTYxMTB9.1d_HfblB3tJBJ4XrNTh_wLvnw3lQzRtc5WOqRNMbyQw`,
      },
    });
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
