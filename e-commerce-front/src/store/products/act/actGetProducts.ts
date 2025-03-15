import { createAsyncThunk } from "@reduxjs/toolkit";
import { TProduct } from "@type";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";
type TRespons = TProduct[];

const actGetProducts = createAsyncThunk(
  "products/actGetProducts",
  async (prefix: string, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const respons = await axios.get<TRespons>(
        `/products?cat_prefix=${prefix}`,
        {
          signal,
        }
      );
      return respons.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetProducts;
