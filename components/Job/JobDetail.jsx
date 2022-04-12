import styles from "./JobDetail.module.css";
import Image from "next/image";

const JobDetail = ({ location, xpLevel, degree, type }) => {
  return (
    <ul className={styles.details}>
      <li className={styles.detail}>
        <Image
          className={styles.icon}
          src="https://assets.bossjob.com/website/pin.svg"
          width={15}
          height={15}
        />
        <p className={styles.description}>{location}</p>
      </li>
      <li className={styles.detail}>
        <Image
          className={styles.icon}
          src="https://assets.bossjob.com/website/briefcase.svg"
          width={15}
          height={15}
        />
        <p className={styles.description}>{xpLevel}</p>
      </li>
      <li className={styles.detail}>
        <Image
          className={styles.icon}
          src="https://assets.bossjob.com/website/education.svg"
          width={15}
          height={15}
        />
        <p className={styles.description}>{degree}</p>
      </li>
      <li className={styles.detail}>
        <Image
          className={styles.icon}
          src="https://assets.bossjob.com/website/clock.svg"
          width={15}
          height={15}
        />
        <p className={styles.description}>{type}</p>
      </li>
    </ul>
  );
};

export default JobDetail;
