import Section from './Section/Section';
import styles from './Resume.module.css';

const resume = props => {
  return (
    <div className={styles.resume_sections}>
      {
        props.sections.map(section => (
          <Section
            name={section.name}
            data={section.data}
            key={section.name}
          />
        ))
      }
    </div>
  );
};

export default resume;