import React from "react";

import Layout from "./layout";

export default props => {
  return (
    <Layout title="Home">

      <section className="hero is-medium is-info is-bold">
        <div className="hero-body">
          <h1 className="title is-1">CPS 530 Term Project</h1>
          <p className="subtitle is-2">
            A comprehensive review of web development system frameworks: Node.JS, Ronin, React, and Bulma.
          </p>
          <section className="columns mt-40">
          <div className="column is-4">
            <div className="content">
              <img id="logo" src="/static/logos/Node.js-logo.png"></img>
            </div>
          </div>
          <div className="column is-4">
            <div className="content">
              <img id="logo" src="/static/logos/ronin-logo.png"></img>
            </div>
          </div>
            <div className="column is-4">
            <div className="content">
            <img id="logo" src="/static/logos/bulma-logo.png"></img>
            </div>
            </div>
            <div className="column is-4">
            <div className="content">
            <img id="logo" src="/static/logos/react-logo.png"></img>
            </div>
            </div>
          </section>
        </div>
      </section>
    </Layout>
  );
};
