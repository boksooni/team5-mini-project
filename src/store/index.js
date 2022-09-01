import { configureStore } from "@reduxjs/toolkit";
import allProductSlice from "./slices/all-product-slice";
import searchedProductSlice from "./slices/searched-product-slice";
import usersReducer from "./slices/user-slice";
import cartReducer from "./slices/cart-slice";

const store = configureStore({
  reducer: {
    allProduct: allProductSlice.reducer,
    searchedProduct: searchedProductSlice.reducer,
    users: usersReducer,
    cart: cartReducer,
  },
});

export default store;
