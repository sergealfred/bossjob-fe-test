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
    getPageResults: (state, { payload }) => {
      const {
        data: { page, total_pages: total, total_num: pageNum },
      } = payload;
      state.totalPages = total;
      state.totalNum = pageNum;
    },
    setQuery: (state, { payload }) => {
      state.query = payload;
    },
    setPage: (state, { payload }) => {
      state.page = payload;
    },
    setMinPageLimit: (state, { payload }) => {
      state.minPageLimit = payload;
    },
    setMaxPageLimit: (state, { payload }) => {
      state.maxPageLimit = payload;
    },
  },
});

export const {
  getPageResults,
  setQuery,
  setPage,
  setMinPageLimit,
  setMaxPageLimit,
} = resultsSlice.actions;
export default resultsSlice.reducer;
