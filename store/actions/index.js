import axios from "axios";
import { replaceJobs } from "../jobs-slice";
import { getResults } from "../results-slice";
import { fetchStart, fetchComplete } from "../ui-slice";

export const fetchJobData = (query, page) => async (dispatch) => {
  dispatch(fetchStart());
  const { data } = await axios.get("https://api.bossjob.com/jobs/filter", {
    params: {
      size: 12,
      query,
      page,
    },
  });
  dispatch(fetchComplete());
  dispatch(replaceJobs(data));
  dispatch(getResults(data));
};
