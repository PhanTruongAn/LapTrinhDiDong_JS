import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
  },
  reducers: {
    updateOrder: (state, action) => {
      state.orders = action.payload;
    },
  },
  extraReducers: (builder) => {},
});
export const { updateOrder } = orderSlice.actions;
export default orderSlice.reducer;
