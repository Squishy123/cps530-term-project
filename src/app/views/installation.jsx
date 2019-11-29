import React from "react";
import Layout from "./layout";

export default props => {
  return (
    <Layout title="Installation">
      <section className="hero is-medium is-info">
        <div className="hero-body">
          <h1 className="title is-1">Getting Started</h1>
          <p className="subtitle is-2">
            Let's see how to install and implement React, Ronin, and Node.js
          </p>
        </div>
      </section>
      <section>
        <div className="card-content">
          <div className="content">
            <p className="title is-4">React</p>
              <p>
                The "Create React App" is a user-friendly environment for building a new project with React
              </p>
              <p>You will need to have Node.js already installed and with a version after 8.10 and npm after 5.6</p>
              <pre class = "gatsby-code-bash">
                <strong>npx create-react-app my-app</strong>
              </pre>
          </div>
        </div>
      </section>
    </Layout>
  );
};
