import { createAsyncThunk } from "@reduxjs/toolkit";
import { PaymentKeyRequestSchemaType } from "@type/paymobKey.type";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

const actGetPaymobKey = createAsyncThunk(
  "actGetPaymobKey",
  async (paylod: PaymentKeyRequestSchemaType, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const response = await axios.post(`paymob/payment-key`, paylod);
      return response.data.payment_key;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetPaymobKey;
