import React from "react";

import Layout from "./layout";

export default props => {
  return (
    <Layout title="Conclusion">
      <div className="hero is-medium is-info">
        <div className="hero-body">
          <h1 className="title is-1">Conclusion</h1>
          <p className="subtitle is-2">
            Here's what we think about the frameworks used in this project.
          </p>
        </div>
      </div>
      <div className="hero is-danger columns">
        <div className="hero-body column">
          <h1 className="title is-1">Ronin</h1>
          <div>
            <i className="fas fa-star fa-3x"></i>
            <i className="fas fa-star fa-3x"></i>
            <i className="fas fa-star fa-3x"></i>
            <i className="fas fa-star fa-3x"></i>
            <i className="fas fa-star-half-alt fa-3x"></i>
          </div>
        </div>
      </div>
      <div className="hero is-dark columns">
        <div className="hero-body column">
          <div>
            <h1 className="title is-1">React</h1>
            <i className="fas fa-star fa-3x"></i>
            <i className="fas fa-star fa-3x"></i>
            <i className="fas fa-star fa-3x"></i>
            <i className="fas fa-star fa-3x"></i>
            <i className="fas fa-star fa-3x"></i>
          </div>
        </div>
      </div>
      <div className="hero is-success columns">
        <div className="hero-body column">
          <h1 className="title is-1">Bulma</h1>
          <div>
            <i className="fas fa-star fa-3x"></i>
            <i className="fas fa-star fa-3x"></i>
            <i className="fas fa-star fa-3x"></i>
            <i className="fas fa-star fa-3x"></i>
            <i className="fas fa-star fa-3x"></i>
          </div>
        </div>
      </div>
    </Layout>
  );
};
