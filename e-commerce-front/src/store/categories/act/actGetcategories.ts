import { createAsyncThunk } from "@reduxjs/toolkit";
import { TCategory } from "@type";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

export const api = axios.create({
  baseURL: "/api", // تأكد من أن الرابط صحيح
  headers: {
    "Content-Type": "application/json",
  },
});
type TRespons = TCategory[];

const actGetcategories = createAsyncThunk(
  "categories/actGetcategories",
  async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const respons = await api.get<TRespons>("/categories", {
        signal,
      });
      return respons.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetcategories;
