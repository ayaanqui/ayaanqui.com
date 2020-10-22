import styles from './RepoCard.module.css';

const RepoCard = props => {
  return (
    <>
      <div className={`list-group-item ${styles.repo_card}`}>
        <div className={styles.owner}>
          <a href={props.owner.html_url} target="_blank">
            <img src={props.owner.avatar_url} />
            <span>{props.owner.login}</span>
          </a>
        </div>
        <div className={styles.name}>
          <h4>
            <a href={props.htmlUrl} target="_blank">
              {props.name}
            </a>
          </h4>
        </div>
        <div className={styles.description}>
          {(props.description) ? (
            <p>{props.description}</p>
          ) : (
              <p><i>No description</i></p>
            )}
        </div>
        <div className={styles.details}>
          {(props.language) ? (
            <span className="badge badge-pill badge-dark">
              {props.language}
            </span>
          ) : (
              <span className="badge badge-pill badge-warning">N/A</span>
            )}
        </div>
      </div>
    </>
  );
};

export default RepoCard