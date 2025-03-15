import { createSlice, nanoid, PayloadAction } from "@reduxjs/toolkit";
import { TToast } from "@type";

interface IToastSlice {
  records: TToast[];
}

const initialState: IToastSlice = {
  records: [],
};

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    addToast: (state, action: PayloadAction<TToast>) => {
      const id = nanoid();
      state.records.push({
        id: id,
        title: action.payload.title || action.payload.type,
        type: action.payload.type,
        message: action.payload.message,
      });
    },
    removeToast: (state, action) => {
      state.records = state.records.filter((el) => el.id !== action.payload);
    },
  },
});

export const { removeToast, addToast } = toastSlice.actions;
export default toastSlice.reducer;
