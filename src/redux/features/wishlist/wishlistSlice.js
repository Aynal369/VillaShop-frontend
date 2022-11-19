import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  wishlistItems: localStorage.getItem("wishlistItems")
    ? JSON.parse(localStorage.getItem("wishlistItems"))
    : [],
};

export const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      state.wishlistItems.push({ ...action.payload });
      toast.warn("Added to wishlist");
      localStorage.setItem(
        "wishlistItems",
        JSON.stringify(state.wishlistItems)
      );
    },
    removeWishlist(state, action) {
      state.wishlistItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextWishlistItems = state.wishlistItems.filter(
            (item) => item.id !== cartItem.id
          );
          state.wishlistItems = nextWishlistItems;
        }
        localStorage.setItem(
          "wishlistItems",
          JSON.stringify(state.wishlistItems)
        );
        return state;
      });
    },
  },
});

export const { addToWishlist, removeWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
