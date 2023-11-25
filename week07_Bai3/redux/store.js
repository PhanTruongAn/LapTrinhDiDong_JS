import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "../redux/dataSlice";
import shopReducer from "../redux/shopSlice";
import ordersReducer from "./orderSlice";

const store = configureStore({
  reducer: {
    data: dataReducer,
    shop: shopReducer,
    orders: ordersReducer,
  },
});
export default store;
