import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const shopSlice = createSlice({
  name: "shop",
  initialState: {
    shop: {},
  },
  reducers: {
    shopInit: (state, action) => {
      state.shop = action.payload;
    },
  },
  extraReducers: (builder) => {},
});
export const { shopInit } = shopSlice.actions;
export default shopSlice.reducer;
