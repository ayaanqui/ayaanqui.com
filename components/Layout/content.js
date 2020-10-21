import Navbar from './navbar';
import styles from './content.module.css';

const Content = props => {
  return (
    <div className={styles.siteWrapper}>
      <div className={styles.siteInner}>
        <Navbar />

        {props.children}
      </div>
    </div>
  );
};

export default Content;