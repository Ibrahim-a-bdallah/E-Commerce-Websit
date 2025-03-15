import { createSlice } from "@reduxjs/toolkit";
import { isString, TCategory, TLoading } from "@type";
import actGetcategories from "./act/actGetcategories";

interface ICategoryState {
  records: TCategory[];
  loading: TLoading;
  error: string | null;
}

const initialState: ICategoryState = {
  records: [],
  loading: "idle",
  error: null,
};

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    cleanupCategoriesRecords(state) {
      state.records = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(actGetcategories.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetcategories.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.records = action.payload;
    });
    builder.addCase(actGetcategories.rejected, (state, action) => {
      state.loading = "rejected";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export { actGetcategories };
export const { cleanupCategoriesRecords } = categoriesSlice.actions;
export default categoriesSlice.reducer;
