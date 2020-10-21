import Header from '../components/header';
import Content from '../components/Layout/content';

const About = () => {
  const currentYear = new Date().getFullYear();
  const age = currentYear - 1999;

  return (
    <Content>
      <Header title='About' />

      <div className="container mt-5 mb-5">
        <h1>Who am I?</h1>
        <p>I'm Ayaan, {age} years old. Currently studying computer science at University of Illinois at Chicago.</p>
      </div>
    </Content>
  );
};

export default About;
