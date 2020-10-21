import Header from '../components/header';
import Content from '../components/Layout/content';

const Resume = () => {
  return (
    <Content>
      <Header title='Resume' />

      <div className="container mt-5 mb-5">
        <h1>Resume</h1>
        <p>Hoping to convert my PDF resume into this page somehow</p>
      </div>
    </Content>
  );
};

export default Resume;
