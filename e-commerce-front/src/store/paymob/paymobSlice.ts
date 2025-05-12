import { createSlice } from "@reduxjs/toolkit";
import actGetPaymobKey from "./actGetPaymobKey/actGetPaymobKey";
import { TLoading } from "@type/shared.type";
import { isString } from "@type/gaurd";

interface Ipayment_keyState {
  payment_key: string;
  loading: TLoading;
  error: string | null;
}

const initialState: Ipayment_keyState = {
  payment_key: "",
  loading: "idle",
  error: null,
};

const paymobSlice = createSlice({
  name: "paymob",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(actGetPaymobKey.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actGetPaymobKey.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.payment_key = action.payload;
    });
    builder.addCase(actGetPaymobKey.rejected, (state, action) => {
      state.loading = "rejected";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export default paymobSlice.reducer;
