import axios from "axios";

import { getJobsData } from "../jobs-slice";
import { setQuery, setPage, getPageResults } from "../results-slice";
import { startLoader, endLoader } from "../ui-slice";

export const fetchJobData =
  ({ query, page }) =>
  async (dispatch) => {
    dispatch(setQuery(query));
    dispatch(setPage(page));
    dispatch(startLoader());

    const { data } = await axios.get("https://api.bossjob.com/jobs/filter", {
      params: {
        size: 12,
        query,
        page,
      },
    });

    dispatch(endLoader());
    dispatch(getJobsData(data));
    dispatch(getPageResults(data));
  };
