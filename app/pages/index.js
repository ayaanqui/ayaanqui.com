import Header from '../components/header';
import Content from '../components/Layout/content';
import styles from './index.module.css';

export default function Home() {
  const skills = [
    'Java', 'Node.js', 'C/C++', 'Python', 'React', 'Express.js', 'Next.js', 'MySQL', 'PostgreSQL'
  ];

  return (
    <Content>
      <Header />

      <div className={`${styles.homeContent} container`}>
        <div className={styles.title}>
          <h1>Hi there!</h1>
        </div>

        <div className={styles.summary}>
          <p>
            I'm a student at University of Illinois at Chicago studying computer science. When I'm not coding or doing school-related work, I enjoy learning martial arts such as Jiu Jitsu, Kickboxing, and Wrestling.
          </p>
        </div>
      </div>

      <div className="container mb-5">
        <h4>Programming skills</h4>

        <br />

        {skills.map(skill => (
          <button type="button" className={`btn btn-dark ${styles.styleBtn}`} key={skill.toLowerCase()}>{skill}</button>
        ))}
      </div>
    </Content>
  )
}
