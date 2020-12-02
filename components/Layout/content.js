import Navbar from './navbar';
import styles from './content.module.css';

const Content = props => {
  return (
    <>
      <noscript
        dangerouslySetInnerHTML={{
          __html: `
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5BJB4Z9" height="0" width="0" style="display:none;visibility:hidden"></iframe>
          `,
        }}
      />

      <div className={styles.siteWrapper}>
        <div className={styles.siteInner}>
          {props.navInvisible ? null : (<Navbar />)}

          {props.children}
        </div>
      </div>
    </>
  );
};

export default Content;