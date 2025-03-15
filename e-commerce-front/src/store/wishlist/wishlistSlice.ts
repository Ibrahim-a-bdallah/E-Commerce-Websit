import { createSlice } from "@reduxjs/toolkit";
import actLikeToggle from "./act/actLikeToggle";
import { TProduct, TLoading, isString } from "@type";
import actGetWishlist from "./act/actGetWishlist";
import { logOut } from "@store/signInAuth/authSlice";

interface IWishlistState {
  itemsId: number[];
  productFullInfo: TProduct[];
  error: null | string;
  loading: TLoading;
}

const initialState: IWishlistState = {
  itemsId: [],
  error: null,
  productFullInfo: [],
  loading: "idle",
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    cleanupWishlistProductFullinfo(state) {
      state.productFullInfo = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actLikeToggle.pending, (state) => {
      state.error = null;
    });
    builder.addCase(actLikeToggle.fulfilled, (state, action) => {
      if (action.payload?.type === "add") {
        state.itemsId.push(action.payload.id);
      } else if (action.payload?.type === "remove") {
        state.itemsId = state.itemsId.filter((el) => el !== action.payload?.id);
        state.productFullInfo = state.productFullInfo.filter(
          (el) => el.id !== action.payload?.id
        );
      }
    });
    builder.addCase(actLikeToggle.rejected, (state, action) => {
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
    //act Get Wishlist
    builder.addCase(actGetWishlist.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetWishlist.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      if (action.payload.dataType === "ProductsFullInfo") {
        console.log(action.payload.data);
        state.productFullInfo = action.payload.data as TProduct[];
      } else if (action.payload.dataType === "productsIds") {
        state.itemsId = action.payload.data as number[];
      }
    });
    builder.addCase(actGetWishlist.rejected, (state, action) => {
      state.loading = "rejected";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
    builder.addCase(logOut, (state) => {
      state.itemsId = [];
      state.productFullInfo = [];
    });
  },
});

export { actLikeToggle };
export const { cleanupWishlistProductFullinfo } = wishlistSlice.actions;
export default wishlistSlice.reducer;
