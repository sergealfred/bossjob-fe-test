import { useSelector } from "react-redux";
import styles from "./Results.module.css";
const Results = () => {
  const {
    results: { totalNum },
  } = useSelector((state) => state);

  const {
    ui: { loading },
  } = useSelector((state) => state);

  return (
    loading !== null &&
    !loading && (
      <div className={styles.results}>
        <p>{totalNum} jobs found</p>
      </div>
    )
  );
};

export default Results;
