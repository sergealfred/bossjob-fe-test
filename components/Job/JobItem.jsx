import JobDetail from "./JobDetail";
import styles from "./JobItem.module.css";
import Link from "next/link";
import { formatCompactNumber, formatRelativeDate } from "../../utils/formatter";

const JobItem = (props) => {
  const formattedSalary = () => {
    const from = formatCompactNumber(props.salaryRangeFrom);
    const to = formatCompactNumber(props.salaryRangeTo);

    if (from !== "NaN" && to !== "NaN") {
      return `\u{020B1}${from} - \u{020B1}${to}`;
    } else {
      return "Login to view salary";
    }
  };

  return (
    <div className={styles.job}>
      <div className={styles.title}>
        <Link href={`/jobs/${props.title}`}>
          <h2 className={styles["job-title"]}>{props.title}</h2>
        </Link>
        <p className={styles.salary}>{formattedSalary()}</p>
      </div>
      <JobDetail
        location={props.location}
        xpLevel={props.xpLevel}
        degree={props.degree}
        type={props.type}
      />
      <div className={styles.company}>
        <div className={styles["company-details"]}>
          <img
            className={styles.logo}
            src={props.companyLogo}
            alt={props.companyName}
          />
          <p className={styles["company-name"]}>{props.companyName}</p>
        </div>
        <p className={styles["updated-at"]}>
          {formatRelativeDate(Date.parse(props.updatedAt))}
        </p>
      </div>
    </div>
  );
};
export default JobItem;

// key={item["id"]}
// degree={item["degree"]}
// title={item["job_title"]}
// country={item["job_country"]}
// type={item["job_type"]}
// location={item["job_location"]}
// salaryRangeFrom={item["salary_range_from"]}
// salaryRangeTo={item["salary_range_to"]}
// companyName={item["company_name"]}
// companyLogo={item["company_logo"]}
// updatedAt={item["updated_at"]}
// companyLocation={item["company_location"]}
// xpLevel={item["xp_lvl"]}
