import { configureStore } from "@reduxjs/toolkit";
import allProductSlice from "./slices/all-product-slice";
import searchedProductSlice from "./slices/searched-product-slice";
import usersReducer from "./slices/user-slice";
import cartReducer from "./slices/cart-slice";
import curationReducer from "./slices/curation-product-slice";

import shownProductSlice from "./slices/shown-product-slice";

import promotionReducer from "./slices/promotion-product-slice";

const store = configureStore({
  reducer: {
    allProduct: allProductSlice.reducer,
    searchedProduct: searchedProductSlice.reducer,
    shownProduct: shownProductSlice.reducer,
    users: usersReducer,
    cart: cartReducer,
    curation: curationReducer,
    promotion: promotionReducer,
  },
});

export default store;
