import styles from './PersonalInfo.module.css';

const personalInfo = props => {
  return (
    <div className={styles.sticky_info}>
      <div className={`card mb-3 ${styles.info_card}`}>
        <div className="card-body">
          <div className={styles.name}>
            <h1>{props.fname}</h1>
            <h1>{props.lname}</h1>
          </div>

          <div className={styles.dob}>
            <span>{props.dob}</span>
          </div>

          <div className={styles.status}>
            <span>{props.status}</span>
          </div>

          <div className={styles.work_status}>
            <span>{props.workAuth}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default personalInfo;