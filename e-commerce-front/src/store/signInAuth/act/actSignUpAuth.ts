import { createAsyncThunk } from "@reduxjs/toolkit";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

type TFormProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const actSignUpAuth = createAsyncThunk(
  "signUp/actSignUpAuth",
  async (formData: TFormProps, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      const res = await axios.post("/register", formData);
      return res.data;
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actSignUpAuth;
