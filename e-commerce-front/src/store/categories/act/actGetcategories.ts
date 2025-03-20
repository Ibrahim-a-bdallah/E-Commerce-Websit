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
      const response = await axios.get<TRespons>("/categories", {
        baseURL: import.meta.env.VITE_API_URL || "/api", // تحديد baseURL هنا
        signal,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetcategories;
