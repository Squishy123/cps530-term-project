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
              <div className="columns is-centered is-mobile">
                <h1 className="title is-1">Ronin</h1>
              </div>
              <div className="columns is-centered is-mobile">
                <i className="fas fa-star fa-3x"></i>
                <i className="fas fa-star fa-3x"></i>
                <i className="fas fa-star fa-3x"></i>
                <i className="fas fa-star fa-3x"></i>
                <i className="far fa-star fa-3x"></i>
              </div>
            </div>
            <div className="hero-body column is-two-thirds">
              <h1 className="title is-3">Did Ronin perform to our expectations? <i className="fas fa-angle-double-right fa-1x"></i></h1>
              <p className="box has-text-black subtitle is-3">
                Yes, Ronin did what we wanted it to do.
              </p>
              <br></br>
              <h1 className="title is-3">Was Ronin difficult to install or configure? <i className="fas fa-angle-double-right fa-1x"></i></h1>
              <p className="box has-text-black subtitle is-3">
                No, Ronin was easy to install and get started using NPM.
              </p>
              <br></br>
              <h1 className="title is-3">Was it easy to create pages with Ronin? <i className="fas fa-angle-double-right fa-1x"></i></h1>
              <p className="box has-text-black subtitle is-3">
                Ronin made it easy to create pages by generating basic react templates and routes which saved a lot of time.
              </p>
              <br></br>
              <h1 className="title is-3">Was the learning curve steep? <i className="fas fa-angle-double-right fa-1x"></i></h1>
              <p className="box has-text-black subtitle is-3">
                It is very simple to get started with Ronin.
              </p>
              <br></br>
              <h1 className="title is-3">Would we do things differently? <i className="fas fa-angle-double-right fa-1x"></i></h1>
              <p className="box has-text-black subtitle is-3">
                No, Ronin is a necessary tool for this project.
              </p>
              <br></br>
              <h1 className="title is-3">Did we regret the choice of framework? <i className="fas fa-angle-double-right fa-1x"></i></h1>
              <p className="box has-text-black subtitle is-3">
                No, Ronin is one of a kind.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="hero is-medium is-dark is-bold">
          <div className="columns">
            <div className="hero-body column is-one-quarter">
              <div className="columns is-centered is-mobile">
                <img className="size-100x100" src="/static/logos/react-logo.png" />
                <h1 className="title is-1">React</h1>
              </div>
              <div className="columns is-centered is-mobile">
                <i className="fas fa-star fa-3x"></i>
                <i className="fas fa-star fa-3x"></i>
                <i className="fas fa-star fa-3x"></i>
                <i className="fas fa-star fa-3x"></i>
                <i className="fas fa-star-half-alt fa-3x"></i>
              </div>
            </div>
            <div className="hero-body column is-two-thirds">
              <h1 className="title is-3">Did React perform to our expectations? <i className="fas fa-angle-double-right fa-1x"></i></h1>
              <p className="box has-text-black subtitle is-3">
                React met with our expectations.
              </p>
              <br></br>
              <h1 className="title is-3">Was React difficult to install or configure? <i className="fas fa-angle-double-right fa-1x"></i></h1>
              <p className="box has-text-black subtitle is-3">
                React was easy to install and configure.
              </p>
              <br></br>
              <h1 className="title is-3">Was it easy to create pages with React? <i className="fas fa-angle-double-right fa-1x"></i></h1>
              <p className="box has-text-black subtitle is-3">
                React allowed us to create templates for reuse in various pages.
              </p>
              <br></br>
              <h1 className="title is-3">Was the learning curve steep? <i className="fas fa-angle-double-right fa-1x"></i></h1>
              <p className="box has-text-black subtitle is-3">
                Leaning curve may be steep due to syntax and structure.
              </p>
              <br></br>
              <h1 className="title is-3">Would we do things differently? <i className="fas fa-angle-double-right fa-1x"></i></h1>
              <p className="box has-text-black subtitle is-3">
                No, React is popular for a reason.
              </p>
              <br></br>
              <h1 className="title is-3">Did we regret the choice of framework? <i className="fas fa-angle-double-right fa-1x"></i></h1>
              <p className="box has-text-black subtitle is-3">
                No.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout >
  );
};
