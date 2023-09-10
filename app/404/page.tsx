import Content from "../components/layout/Content";

const Error404Page = () => {
  return (
    <Content>
      <div className="container mt-5 mb-5">
        <div className="text-center mb-3">
          <h1>404, Page not found</h1>
        </div>
        <p>
          The page that you are trying to access does not exist. Try using the
          links in the navbar to navigate through the different pages.
        </p>
      </div>
    </Content>
  );
};

export default Error404Page;
