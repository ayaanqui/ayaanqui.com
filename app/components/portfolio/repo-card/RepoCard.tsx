import Image from "next/image";
import styles from "./RepoCard.module.css";
import moment from "moment";

export default function RepoCard(props: any) {
  const lastUpdated = moment(props.pushedAt).fromNow(true);
  const created = moment(props.createdAt).fromNow();

  return (
    <>
      <div className={`list-group-item ${styles.repo_card}`}>
        <div className={styles.owner}>
          <a href={props.owner.html_url} target="_blank">
            <Image
              src={`${props.owner.avatar_url}&s=30`}
              width={30}
              height={30}
              alt="avatar"
            />
            <span>{props.owner.login}</span>
          </a>
        </div>
        <div className={styles.name}>
          <h4 className={styles.hN_InlineBlock}>
            <a href={props.htmlUrl} target="_blank">
              {props.name}
            </a>
          </h4>
        </div>
        <div className={styles.description}>
          <p>{props.description ? props.description : null}</p>
        </div>
        <div className={styles.details}>
          <span className="badge badge-pill badge-dark mr-2">
            <span className="icon-split-call-arrows mr-2"></span>
            {props.forks}
          </span>

          <span className="badge badge-pill badge-dark mr-2">
            <span className="icon-history-clock-button mr-2"></span>
            {lastUpdated}
          </span>

          {props.language ? (
            <span className="badge badge-pill badge-primary mr-2">
              {props.language}
            </span>
          ) : (
            <span className="badge badge-pill badge-warning mr-2">N/A</span>
          )}

          <span className="badge badge-pill badge-dark mr-2">
            {props.size} kb
          </span>
        </div>
      </div>
    </>
  );
}
