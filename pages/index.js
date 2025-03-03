import Head from "next/head";
import Header from "/components/Header";
import Search from "../components/Search";
import styles from "../styles/Home.module.css";
import { Fragment, useEffect } from "react";
import JobList from "../components/Job/JobList";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../components/Loader";
import Pagination from "../components/Pagination/";
import Results from "../components/Results";

// Saga implementation
import { fetchJobData } from "../store/jobs-slice";
// Thunk implementation
// import { fetchJobData } from "../store/actions";

export default function Home() {
  const dispatch = useDispatch();
  const {
    results: { totalPages },
  } = useSelector((state) => state);
  const {
    ui: { loading },
  } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchJobData({ query: "test", page: 1 }));
  }, []);

  return (
    <Fragment>
      <Head>
        <title>
          Career Platform for Professionals in the Philippines | Bossjob
        </title>
        <meta
          name="description"
          content="Discover job opportunities in Philippines on Bossjob!"
        />
      </Head>
      <div className={styles.app}>
        <div className={styles.appWrapper}>
          <Header />
          <Search />

          {loading ? <Loader /> : <Results />}
          {!loading && <JobList />}
          {!loading && totalPages > 0 && <Pagination />}
        </div>
      </div>
    </Fragment>
  );
}
