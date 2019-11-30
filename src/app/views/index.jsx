import React from "react";

import Layout from "./layout";

export default props => {
  return (
    <Layout title="Home">
      <div className="hero is-info is-bold">
        <div className="hero-body"></div>
      </div>
      <div className="container">
        <h1 className="title is-5">Demonstration of Ronin + React</h1>
      </div>
    </Layout>
  );
};
