import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  jobs: [],
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    replaceJobs: (state, { payload }) => {
      const {
        data: { jobs },
      } = payload;
      state.jobs = jobs;
    },
  },
});

export const { replaceJobs } = jobsSlice.actions;
export default jobsSlice.reducer;
