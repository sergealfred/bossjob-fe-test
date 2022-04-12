import { configureStore } from "@reduxjs/toolkit";
import jobs from "./jobs-slice";
import results from "./results-slice";
import ui from "./ui-slice";

const store = configureStore({
  reducer: {
    ui,
    jobs,
    results,
  },
});

export default store;
