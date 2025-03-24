import { createAsyncThunk } from "@reduxjs/toolkit";
import { TCategory } from "@type";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

type TRespons = TCategory[];

const actGetcategories = createAsyncThunk(
  "categories/actGetcategories",
  async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const respons = await axios.get<TRespons>("/categories", { signal });
      console.log("Fetched categories:", respons.data); // للتحقق من البيانات
      return respons.data;
    } catch (error) {
      console.error("Error fetching categories:", error); // للتحقق من الأخطاء
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetcategories;
