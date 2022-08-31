import { configureStore } from "@reduxjs/toolkit";
import allProductSlice from "./slices/all-product-slice";
import searchedProductSlice from "./slices/searched-product-slice";
import { curationReducer } from "./slices/curation-product-slice";

const store = configureStore({
  reducer: {
    allProduct: allProductSlice.reducer,
    searchedProduct: searchedProductSlice.reducer,
    curation: curationReducer
  },
});

export default store;
