"use client";

import Content from "./components/layout/Content";

export default function Error404Page() {
  return (
    <Content>
      <div className="container mt-10 mb-5">
        <div className="text-center mb-3">
          <h1>Page not found</h1>
        </div>
        <p className="text-center">
          The page that you are trying to access does not exist. Try using the
          links in the navbar to navigate through the different pages.
        </p>
      </div>
    </Content>
  );
}
