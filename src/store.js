import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./reduxFeatures/cart/cartSlice";
import wishlistReducer from "./reduxFeatures/wishlist/wishlistSlice";

export default configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});
