import { createSlice } from "@reduxjs/toolkit";

const shownProductSlice = createSlice({
  name: "shownProductSlice",
  initialState: {
    allData: [],
    searchedData: [],
    isSearched: false,
  },
  reducers: {
    updateShownAllProduct(state, action) {
      state.allData = action.payload;
    },
    updateShownSearchedProduct(state, action) {
      state.searchedData = action.payload;
    },
    changeIsSearched(state) {
      state.isSearched = true;
    },
  },
});

export const shownProductActions = shownProductSlice.actions;

export default shownProductSlice;
