import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

type TFormProps = {
  email: string;
  password: string;
};

const actSignInAuth = createAsyncThunk(
  "signUp/actSignInAuth",
  async (formData: TFormProps, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post("/login", formData);
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actSignInAuth;
