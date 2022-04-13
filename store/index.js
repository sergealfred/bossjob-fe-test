import { configureStore } from "@reduxjs/toolkit";
import jobs from "./jobs-slice";
import results from "./results-slice";
import ui from "./ui-slice";
import createSagaMiddleware from "@redux-saga/core";
import { watchJobs } from "./sagas";

const saga = createSagaMiddleware();

const store = configureStore({
  reducer: {
    ui,
    jobs,
    results,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(saga),
});

saga.run(watchJobs);

export default store;
