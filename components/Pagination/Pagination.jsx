import styles from "./Pagination.module.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchJobData } from "../../store/actions";
import { setMinPageLimit, setMaxPageLimit } from "../../store/results-slice";

const Pagination = () => {
  const dispatch = useDispatch();
  const {
    results: {
      query,
      totalPages,
      page: currentPage,
      minPageLimit,
      maxPageLimit,
      pageNumberLimit,
    },
  } = useSelector((state) => state);

  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  const prevClickHandler = () => {
    if ((currentPage - 1) % pageNumberLimit === 0) {
      dispatch(setMaxPageLimit(maxPageLimit - pageNumberLimit));
      dispatch(setMinPageLimit(minPageLimit - pageNumberLimit));
    }
    dispatch(fetchJobData(query, currentPage - 1));
  };

  const nextClickHandler = () => {
    if (currentPage + 1 > maxPageLimit) {
      dispatch(setMaxPageLimit(maxPageLimit + pageNumberLimit));
      dispatch(setMinPageLimit(minPageLimit + pageNumberLimit));
    }
    dispatch(fetchJobData(query, currentPage + 1));
  };

  const pageChangeHandler = (event) => {
    dispatch(fetchJobData(query, event.target.value));
  };

  let pageIncrementEllipses = null;
  if (pages.length > maxPageLimit) {
    pageIncrementEllipses = (
      <button className={styles["page-link"]} onClick={nextClickHandler}>
        &hellip;
      </button>
    );
  }
  let pageDecremenEllipses = null;
  if (minPageLimit >= 1) {
    pageDecremenEllipses = (
      <button className={styles["page-link"]} onClick={prevClickHandler}>
        &hellip;
      </button>
    );
  }

  const pageNumbers = pages.map((page) => {
    if (page <= maxPageLimit && page > minPageLimit) {
      return (
        <button
          key={page}
          value={page}
          onClick={pageChangeHandler}
          className={`${styles["page-link"]}${
            currentPage === page ? ` ${styles.active}` : ""
          }`}
        >
          {page}
        </button>
      );
    } else {
      return;
    }
  });

  return (
    <div className={styles.pagination}>
      <button
        className={styles["page-link"]}
        onClick={prevClickHandler}
        disabled={currentPage === pages[0]}
      >
        &lt;
      </button>

      {pageDecremenEllipses}
      {pageNumbers}
      {pageIncrementEllipses}

      <button
        className={styles["page-link"]}
        onClick={nextClickHandler}
        disabled={currentPage === pages[pages.length - 1]}
      >
        &gt;
      </button>
    </div>
  );
};

export default Pagination;
