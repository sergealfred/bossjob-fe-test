import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true;
    },
    fetchComplete: (state) => {
      state.loading = false;
    },
  },
});

export const { fetchStart, fetchComplete } = uiSlice.actions;
export default uiSlice.reducer;
