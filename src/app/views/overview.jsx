import React from 'react';

import Layout from './layout';

export default (props) => {
  return (
    <Layout title="Overview">
      <section className="mt-30 hero is-medium is-info">
        <div className="hero-body">
          <h1 className="title is-1">Overview of Frameworks</h1>
          <p className="subtitle is-2">Here is a general overview of the <strong>frameworks</strong> used in this project</p>
        </div>
      </section>
      <section className="hero is-danger">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-2 has-text-centered">Ronin</h1>
            <div className="columns">
              <img className="column is-6" src="/static/ronin-logo.png" />
              <div className="column is-6 has-text-left">
                <h1 className="title is-4">Ronin is a back-end framework powered
                by Node.JS</h1>
                <p className="subtitle is-5">
                It provides a variety of generative tools to help
                developers build server applications with ease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="columns">
        <div className="column is-4">
          <div className="card">
            <div className="card-header">
              <p className="card-header-title">Popularity</p>
            </div>
            <div className="card-content">
              <div className="content">
                <p className="title is-4">Popularity</p>
                <p>
                  Ronin is a relatively new framework,
                  and thus hasn't been widely adopted as of yet.
                  Currently the developers are still working on
                  a stable release.
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
                  Ronin's strengths lie within it's intuitive and easy
                  to use CLI tool as well as it's simple declaritive system
                  to developing back-end applications.
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
                  Since there isn't a stable release yet, there are
                  a lot of potential kinks to be work out. Additionally
                  there are a lot of features that have not been implemented.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout >)
}