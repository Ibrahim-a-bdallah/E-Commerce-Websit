import { createSlice } from "@reduxjs/toolkit";
import { TProduct, TLoading, isString } from "@type";
import actGetItems from "./acGetItems/acGetItems";

interface Icart {
  items: { [key: string]: number };
  productFullinfo: TProduct[];
  loading: TLoading;
  error: null | string;
}

const initialState: Icart = {
  items: {},
  productFullinfo: [],
  loading: "idle",
  error: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    CleanupCartProductFullinfo(state) {
      state.productFullinfo = [];
    },
    addtocart: (state, action) => {
      const id = action.payload;
      if (state.items[id]) {
        state.items[id]++;
      } else {
        state.items[id] = 1;
      }
    },
    changeQuantity: (state, action) => {
      state.items[action.payload.id] = action.payload.quantity;
    },
    removeItem: (state, action) => {
      delete state.items[action.payload.id];
      state.productFullinfo = state.productFullinfo.filter(
        (el) => el.id !== action.payload.id
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetItems.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetItems.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.productFullinfo = action.payload;
    });
    builder.addCase(actGetItems.rejected, (state, action) => {
      state.loading = "rejected";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export const {
  addtocart,
  changeQuantity,
  removeItem,
  CleanupCartProductFullinfo,
} = cartSlice.actions;
export default cartSlice.reducer;
