import { createSlice } from "@reduxjs/toolkit";
import { TProduct, TLoading, isString } from "@type";
import actGetproducts from "./act/actGetProducts";

interface IProductsState {
  records: TProduct[];
  loading: TLoading;
  error: string | null;
}

const initialState: IProductsState = {
  records: [],
  loading: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    cleanupProductRecords: (state) => {
      state.records = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetproducts.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetproducts.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.records = action.payload;
    });
    builder.addCase(actGetproducts.rejected, (state, action) => {
      state.loading = "rejected";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export const { cleanupProductRecords } = productsSlice.actions;
export { actGetproducts };
export default productsSlice.reducer;
