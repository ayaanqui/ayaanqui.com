import Header from '../../components/header';
import Content from '../../components/Layout/content';

const err404 = () => {
  return (
    <Content>
      <Header title='404 Page not found' />

      <div className="container mt-5 mb-5">
        <div className="text-center mb-3"><h1>404, Page not found</h1></div>
        <p>The page that you are trying to access does not exist. Try using the links in the navbar to navigate through the different pages.</p>
      </div>
    </Content>
  );
};

export default err404;
