import Header from '../../components/header';
import Content from '../../components/Layout/content';
import ParseResume from '../../util/parseResume';
import fs from 'fs';
import PdfParse from 'pdf-parse';
import Resume from '../../components/Resume/Resume';
import PersonalInfo from '../../components/Resume/PersonalInfo/PersonalInfo';
import styles from './index.module.css';

const resume = props => {
  const parseResume = new ParseResume(props.resumeRawText);
  parseResume.parse();
  let sections = parseResume.getSections();
  let personalInfo = parseResume.getPersonalInfo();

  return (
    <Content>
      <Header title='Resume' />

      <div className="container mt-5 mb-5">
        <h1>Resume</h1>

        <br />

        <div className={`row ${styles.rpad}`}>
          <div className={`col-md-4 position-relative ${styles.cpad}`}>
            <PersonalInfo
              fname={personalInfo[0]}
              dob={personalInfo[1]}
              status={personalInfo[2]}
              workAuth={personalInfo[3]}
            />
          </div>
          <div className={`col-md-8 ${styles.cpad}`}>
            <Resume sections={sections} />
          </div>
        </div>
      </div>
    </Content>
  );
};

export const getStaticProps = async () => {
  let resumeBuffer = fs.readFileSync('public/docs/resume.pdf');

  return PdfParse(resumeBuffer)
    .then(({ text }) => {
      return {
        props: { resumeRawText: text },
      }
    })
    .catch(_ => null);
};

export default resume;
