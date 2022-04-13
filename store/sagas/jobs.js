import axios from "axios";
import { put, call } from "redux-saga/effects";

import { getJobsData } from "../jobs-slice";
import { setQuery, setPage, getPageResults } from "../results-slice";
import { startLoader, endLoader } from "../ui-slice";

export function* fetchJobDataSaga({ payload: { query, page } }) {
  yield put(startLoader());
  yield put(setQuery(query));
  yield put(setPage(page));

  const { data } = yield call(() =>
    axios.get("https://api.bossjob.com/jobs/filter", {
      params: {
        size: 12,
        query,
        page,
      },
    })
  );
  yield put(endLoader());
  yield put(getJobsData(data));
  yield put(getPageResults(data));
}
