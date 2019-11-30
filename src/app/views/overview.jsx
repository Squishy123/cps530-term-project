import React from "react";

import Layout from "./layout";

export default props => {
  return (
    <Layout title="Overview">
      <section className="hero is-medium is-info is-bold">
        <div className="hero-body">
          <h1 className="title is-1">Overview of Frameworks</h1>
          <p className="subtitle is-2">
            Here is a general overview of the <strong>frameworks</strong> used
            in this project
          </p>
        </div>
      </section>
      <section className="hero is-danger is-bold">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-2 has-text-centered">Ronin</h1>
            <div className="columns">
              <img className="column is-6" src="/static/logos/ronin-logo.png" />
              <div className="column is-6 has-text-left">
                <h1 className="title is-4">
                  Ronin is a back-end framework powered by Node.JS
                </h1>
                <p className="subtitle is-5">
                  It provides a variety of generative tools to help developers
                  build server applications with ease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="columns mt-30">
        <div className="column is-4">
          <div className="card">
            <div className="card-header">
              <p className="card-header-title">Popularity</p>
            </div>
            <div className="card-content">
              <div className="content">
                <p className="title is-4">Popularity</p>
                <p>
                  Ronin is a relatively new framework, and thus hasn't been
                  widely adopted as of yet. Currently the developers are still
                  working on a stable release.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-4">
          <div className="card">
            <div className="card-header">
              <p className="card-header-title">Strengths</p>
            </div>
            <div className="card-content">
              <div className="content">
                <p className="title is-4">Strengths</p>
                <p>
                  Ronin's strengths lie within it's intuitive and easy to use
                  CLI tool as well as it's simple declaritive system to
                  developing back-end applications.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-4">
          <div className="card">
            <div className="card-header">
              <p className="card-header-title">Weakness</p>
            </div>
            <div className="card-content">
              <div className="content">
                <p className="title is-4">Weakness</p>
                <p>
                  Since there isn't a stable release yet, there are a lot of
                  potential kinks to be work out. Additionally there are a lot
                  of features that have not been implemented.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="hero is-dark is-bold">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-2 has-text-centered">React</h1>
            <div className="columns">
              <div className="column is-6">
                <img width={200} src="/static/logos/react-logo.png" />
              </div>
              <div className="column is-6 has-text-left">
                <h1 className="title is-4">
                  React is a front-end library created by Facebook and used by
                  Dropbox, Netflix, Reddit and much more
                </h1>
                <p className="subtitle is-5">
                  It helps developers by providing a system to create
                  components, add event systems and manage state.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="columns mt-30">
        <div className="column is-4">
          <div className="card">
            <div className="card-header">
              <p className="card-header-title">Popularity</p>
            </div>
            <div className="card-content">
              <div className="content">
                <p className="title is-4">Popularity</p>
                <p>
                  React is a very popular library used by people all around the
                  world. According to similartech.com, there are over 995,549
                  websites that use React.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-4">
          <div className="card">
            <div className="card-header">
              <p className="card-header-title">Strengths</p>
            </div>
            <div className="card-content">
              <div className="content">
                <p className="title is-4">Strengths</p>
                <p>
                  React provides a new way to write web components using JSX.
                  This helps developers create modular components that can be
                  reused. Additionally React makes use of a virtual-DOM,
                  allowing for faster site rendering.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="column is-4">
          <div className="card">
            <div className="card-header">
              <p className="card-header-title">Weakness</p>
            </div>
            <div className="card-content">
              <div className="content">
                <p className="title is-4">Weakness</p>
                <p>
                  There is a high instability of React development. Developers
                  have to constantly re-learn the new ways to do things.
                  Documentation is minimal, proper design patterns are not
                  obvious.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
