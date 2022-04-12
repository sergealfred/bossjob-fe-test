import { Fragment } from "react";
import { useSelector } from "react-redux";
import JobItem from "./JobItem";
import styles from "./JobList.module.css";

const JobList = (props) => {
  const {
    jobs: { jobs },
  } = useSelector((state) => state);

  return (
    <div className={styles["job-list"]}>
      {jobs.map((item, index) => (
        <JobItem
          key={item["id"]}
          degree={item["degree"]}
          title={item["job_title"]}
          country={item["job_country"]}
          type={item["job_type"]}
          location={item["job_location"]}
          salaryRangeFrom={item["salary_range_from"]}
          salaryRangeTo={item["salary_range_to"]}
          companyName={item["company_name"]}
          companyLogo={item["company_logo"]}
          updatedAt={item["updated_at"]}
          companyLocation={item["company_location"]}
          xpLevel={item["xp_lvl"]}
        />
      ))}
    </div>
  );
};

export default JobList;
