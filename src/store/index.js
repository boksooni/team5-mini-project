import { configureStore } from "@reduxjs/toolkit";
import allProductSlice from "./slices/all-product-slice";
import searchedProductSlice from "./slices/searched-product-slice";
import { curationReducer } from "./slices/curation-product-slice";
import usersReducer from './slices/user-slice';

const store = configureStore({
  reducer: {
    allProduct: allProductSlice.reducer,
    searchedProduct: searchedProductSlice.reducer,
    curation: curationReducer,
    users: usersReducer
  },
});

export default store;
