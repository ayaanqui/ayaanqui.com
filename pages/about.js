import Header from '../components/header';
import Link from 'next/link';
import Content from '../components/Layout/content';

const About = () => {
  return (
    <Content>
      <Header title='About' />

      <div className="container mt-5 mb-5">
        <h1>The about page</h1>
        <p><Link href="/">Home</Link></p>
      </div>
    </Content>
  );
};

export default About;
