import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  query: "",
  page: 0,
  totalPages: 0,
  totalNum: 0,
  minPageLimit: 0,
  maxPageLimit: 5,
  pageNumberLimit: 5,
};

const resultsSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    getResults: (state, { payload }) => {
      const {
        data: { query, page, total_pages: total, total_num: pageNum },
      } = payload;
      state.query = query;
      state.page = page;
      state.totalPages = total;
      state.totalNum = pageNum;
    },
    setMinPageLimit: (state, { payload }) => {
      state.minPageLimit = payload;
    },
    setMaxPageLimit: (state, { payload }) => {
      state.maxPageLimit = payload;
    },
  },
});

export const { getResults, setMinPageLimit, setMaxPageLimit } =
  resultsSlice.actions;
export default resultsSlice.reducer;
