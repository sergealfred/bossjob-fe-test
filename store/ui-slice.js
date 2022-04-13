import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  loading: null,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    startLoader: (state) => {
      state.loading = true;
    },
    endLoader: (state) => {
      state.loading = false;
    },
  },
});

export const { startLoader, endLoader } = uiSlice.actions;
export default uiSlice.reducer;
