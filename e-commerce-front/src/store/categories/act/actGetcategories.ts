import { createAsyncThunk } from "@reduxjs/toolkit";
import { TCategory } from "@type";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

// axios.defaults.baseURL = "https://api.example.com";
axios.defaults.baseURL = "/api"; // يجب أن يكون في ملف إعداد مثل src/axiosConfig.js

type TRespons = TCategory[];

const actGetcategories = createAsyncThunk(
  "categories/actGetcategories",
  async (_, thunkAPI) => {
    const { rejectWithValue, signal } = thunkAPI;
    try {
      const respons = await axios.get<TRespons>("/categories", {
        signal,
      });
      return respons.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actGetcategories;
