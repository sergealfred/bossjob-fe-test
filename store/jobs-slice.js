import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    fetchJobData: (state, { payload }) => {},
    getJobsData: (state, { payload }) => {
      const {
        data: { jobs },
      } = payload;
      state.jobs = jobs;
    },
  },
});

export const { getJobsData, fetchJobData } = jobsSlice.actions;
export default jobsSlice.reducer;
