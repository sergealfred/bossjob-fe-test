import { takeEvery } from "redux-saga/effects";
import { fetchJobDataSaga } from "./jobs";

export function* watchJobs() {
  yield takeEvery("jobs/fetchJobData", fetchJobDataSaga);
}
