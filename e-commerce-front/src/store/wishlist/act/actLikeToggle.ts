import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "@store/index";
import axiosErrorHandler from "@utils/axiosErrorHandler";
import axios from "axios";

const actLikeToggle = createAsyncThunk(
  "wishlist/actLikeToggle",
  async (id: number, ThunkAPI) => {
    const { rejectWithValue, getState } = ThunkAPI;
    const { auth } = getState() as RootState;
    try {
      const isItemExist = await axios.get(
        `/wishlist?userId=${auth.user?.id}&productId=${id}`
      );

      if (isItemExist.data.length > 0) {
        await axios.delete(`/wishlist/${isItemExist.data[0].id}`);
        return { type: "remove", id };
      } else {
        await axios.post("/wishlist", { userId: auth.user?.id, productId: id });
        return { type: "add", id };
      }
    } catch (error) {
      return rejectWithValue(axiosErrorHandler(error));
    }
  }
);

export default actLikeToggle;
