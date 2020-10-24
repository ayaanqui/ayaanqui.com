import Header from '../components/header';
import Link from 'next/link';
import Content from '../components/Layout/content';
import styles from './index.module.css';

export default function Home() {
  return (
    <Content navInvisible={true}>
      <Header />
      
      <div className={styles.homeContent}>
        <div className={styles.title}>
          <h1>Ayaan Siddiqui</h1>
        </div>

        <div className={styles.homeNav}>
          <ul className={styles.homeNavList}>
            <li className={styles.homeNavListItem}>
              <Link href="/portfolio">
                <a className="nav-link">Portfolio</a>
              </Link>
            </li>
            <li className={styles.homeNavListItem}>
              <Link href="/resume">
                <a className="nav-link">Resume</a>
              </Link>
            </li>
            <li className={styles.homeNavListItem}>
              <Link href="/about">
                <a className="nav-link">About</a>
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.summary}>
          <p>
            This webstite is still under works, with only the portfolio page working. In the near future, I hope to display my resume, projects, interests, and contact information on here.
          </p>
        </div>
      </div>
    </Content>
  )
}
