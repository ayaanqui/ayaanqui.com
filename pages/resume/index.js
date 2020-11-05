import Header from '../../components/header';
import Content from '../../components/Layout/content';
import ParseResume from '../../util/parseResume';
import fs from 'fs';
import PdfParse from 'pdf-parse';
import Resume from '../../components/Resume/Resume';
import PersonalInfo from '../../components/Resume/PersonalInfo/PersonalInfo';

const resume = props => {
  const parseResume = new ParseResume(props.resumeRawText);
  parseResume.parse();
  let sections = parseResume.getSections();
  let personalInfo = parseResume.getPersonalInfo();
  console.log(personalInfo);

  return (
    <Content>
      <Header title='Resume' />

      <div className="container mt-5 mb-5">
        <h1>Resume</h1>

        <br />

        <div className="row">
          <div className="col-md-4 position-relative">
            <PersonalInfo
              fname={personalInfo[0]}
              lname={personalInfo[1]}
              dob={personalInfo[2]}
              status={personalInfo[3]}
              workAuth={personalInfo[4]}
            />
          </div>
          <div className="col-md-8">
            <Resume sections={sections} />
          </div>
        </div>
      </div>
    </Content>
  );
};

export const getStaticProps = async () => {
  let resumeBuffer = fs.readFileSync('public/resume.pdf');

  return PdfParse(resumeBuffer)
    .then(({ text }) => {
      return {
        props: { resumeRawText: text },
      }
    })
    .catch(_ => null);
};

export default resume;
