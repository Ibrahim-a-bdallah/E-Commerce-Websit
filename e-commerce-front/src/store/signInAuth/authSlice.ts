import { createSlice } from "@reduxjs/toolkit";
import { TLoading } from "@type/shared.type";
import actSignUpAuth from "./act/actSignUpAuth";
import { isString } from "@type/gaurd";
import actSignInAuth from "./act/actSignInAuth";

type TAuth = {
  loading: TLoading;
  error: string | null;
  accessToken: string | null;
  user: {
    email: string;
    firstName: string;
    lastName: string;
    id: number;
  } | null;
};

const initialState: TAuth = {
  accessToken: null,
  user: null,
  loading: "idle",
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    resetUI: (state) => {
      state.loading = "idle";
      state.error = null;
    },
    logOut(state) {
      state.accessToken = null;
      state.user = null;
    },
  },
  //Register
  extraReducers: (builder) => {
    builder.addCase(actSignUpAuth.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actSignUpAuth.fulfilled, (state) => {
      state.loading = "fulfilled";
      state.error = null;
    });
    builder.addCase(actSignUpAuth.rejected, (state, action) => {
      state.loading = "rejected";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });

    //Login
    builder.addCase(actSignInAuth.pending, (state) => {
      state.loading = "pending";
      state.error = null;
    });
    builder.addCase(actSignInAuth.fulfilled, (state, action) => {
      state.loading = "fulfilled";
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    });
    builder.addCase(actSignInAuth.rejected, (state, action) => {
      state.loading = "rejected";
      if (isString(action.payload)) {
        state.error = action.payload;
      }
    });
  },
});

export const { logOut, resetUI } = authSlice.actions;
export default authSlice.reducer;
