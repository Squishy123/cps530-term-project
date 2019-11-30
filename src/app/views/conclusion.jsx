import React from "react";

import Layout from "./layout";

export default props => {
  return (
    <Layout title="Conclusion">
      <div className="hero is-medium is-info is-bold">
        <div className="hero-body">
          <h1 className="title is-1">Conclusion</h1>
          <p className="subtitle is-2">
            Here's what we think about the frameworks used in this project.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="hero is-medium is-danger is-bold">
          <div className="columns">
            <div className="hero-body column is-one-quarter">
              <h1 className="title is-1">Ronin</h1>
              <div>
                <i className="fas fa-star fa-3x"></i>
                <i className="fas fa-star fa-3x"></i>
                <i className="fas fa-star fa-3x"></i>
                <i className="fas fa-star fa-3x"></i>
                <i className="far fa-star fa-3x"></i>
              </div>
            </div>
            <div className="hero-body column is-two-thirds">
              <p className="box has-text-black subtitle is-3">
                Ronin is great
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="hero is-medium is-dark is-bold">
          <div className="columns">
            <div className="hero-body column is-one-quarter">
              <div className="columns">
                <img width={100} src="/static/logos/react-logo.png" />
                <h1 className="title is-1">React</h1>
              </div>
              <div>
                <i className="fas fa-star fa-3x"></i>
                <i className="fas fa-star fa-3x"></i>
                <i className="fas fa-star fa-3x"></i>
                <i className="fas fa-star fa-3x"></i>
                <i className="fas fa-star-half-alt fa-3x"></i>
              </div>
            </div>
            <div className="hero-body column is-two-thirds">
              <p className="box has-text-black subtitle is-3">
                React is great
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="hero is-medium is-light is-bold">
          <div className="columns">
            <div className="hero-body column is-one-quarter">
              <div className="columns">
                <img width={80} src="/static/logos/bulma-logo.png" />
                <h1 className="title is-1">Bulma</h1>
              </div>
              <div>
                <i className="fas fa-star fa-3x"></i>
                <i className="fas fa-star fa-3x"></i>
                <i className="fas fa-star fa-3x"></i>
                <i className="fas fa-star fa-3x"></i>
                <i className="fas fa-star fa-3x"></i>
              </div>
            </div>
            <div className="hero-body column is-two-thirds">
              <p className="box has-text-black subtitle is-3">
                Bulma is great
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout >
  );
};
