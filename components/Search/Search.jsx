import styles from "./Search.module.css";
import Image from "next/image";
import SearchIcon from "/Search.svg";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchJobData } from "../../store/actions";

const Search = () => {
  const dispatch = useDispatch();
  const inputRef = useRef();

  const fetchJobDataHandler = (event) => {
    event.preventDefault();
    dispatch(fetchJobData(inputRef.current.value, 1));
  };

  return (
    <form className={styles.form}>
      <div className={styles.searchbar}>
        <Image src={SearchIcon} width={15} height={15} />
        <input
          ref={inputRef}
          type="text"
          placeholder="Search for job title or company name"
        />
      </div>
      <button onClick={fetchJobDataHandler}>Filter results</button>
    </form>
  );
};

export default Search;
