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
        <div className={styles.description}><p>{props.description}</p></div>
        <div className={styles.details}>
          {(props.language) ? (
            <span class="badge badge-pill badge-primary">
              {props.language}
            </span>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default RepoCard