import styles from "./page.module.css";
import Content from "./components/layout/Content";
import PortfolioComponent from "./components/portfolio/Portfolio";

export default function Home() {
  return (
    <Content>
      <div className={`${styles.homeContent} container`}>
        <div className={styles.title}>
          <h1>Hi there!</h1>
        </div>

        <div className={styles.summary}>
          <p>{`Welcome to my portfolio page! I am a Software Engineer with a Bachelor's degree in Computer Science from the University of Illinois at Chicago.`}</p>

          <p>
            {`As a Software Engineer, I work on building scalable and robust software and web apps, using REST/GraphQL, React, Angular, Postgres, and Socket-based technologies. I focus on writing easy to read, maintainable, and performant software.`}
          </p>
        </div>
      </div>

      <PortfolioComponent />
    </Content>
  );
}
