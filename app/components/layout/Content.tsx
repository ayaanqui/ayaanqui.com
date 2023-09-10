import Navbar from "./Navbar";
import styles from "./content.module.css";

const Content = (props: {
  navInvisible?: boolean;
  children: React.ReactNode;
}) => {
  return (
    <div className={styles.siteWrapper}>
      <div className={styles.siteInner}>
        {props.navInvisible ? null : <Navbar />}

        {props.children}
      </div>
    </div>
  );
};

export default Content;
