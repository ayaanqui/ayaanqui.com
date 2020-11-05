import styles from './Section.module.css';

const section = props => {
  return (
    <div className={`card ${styles.resume_card}`} key={props.name}>
      <div className="card-body">
        <h3 className="card-title">{props.name}</h3>
        <div className={styles.subsections}>
          {props.data.map(subsection => (
            <div className={styles.subsection} key={`${props.name}_${subsection.name}`}>
              <h5 className={styles.subsection_title}>{subsection.name}</h5>

              {(subsection.info) ? (<p className={styles.info}><i>{subsection.info}</i></p>) : null}

              {(subsection.items) ? (<p>{subsection.items}</p>) : null}

              {(subsection.details) ? (
                <ul>
                  {subsection.details.map((detail, i) => (
                    <li
                      key={`${props.name}_${subsection.name}_li_${i}`}
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default section;