import Header from '../components/header';
import Content from '../components/Layout/content';

const Portfolio = () => {
  return (
    <Content>
      <Header title='Portfolio' />

      <div className="container mt-5 mb-5">
        <h1>Portfolio</h1>
        <p>Projects will be pulled using the GitHub API for <a href="https://github.com/ayaanqui">@ayaanqui</a></p>
      </div>
    </Content>
  );
};

export default Portfolio;
