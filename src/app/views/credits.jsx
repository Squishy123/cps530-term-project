import React from "react";

import Layout from "./layout";

import InfoCard from "./infoCard";

export default props => {
  return (
    <Layout title="Home">
      <div className="hero is-info">
        <div className="hero-body">
          <h1 className="title is-3">Credits</h1>
          <p className="subtitle is-4">
            Here is everyone who worked on this project
          </p>
        </div>
      </div>
      <div className="tile is-ancestor">
        <div className="tile is-parent">
          <article className="tile is-child notification is-danger">
            <InfoCard
              bio={[
                "MY MESSAGE",
                "Adam Aboud",
                "https://github.com/OneHandKlap",
                "/static/bio/adam.jpg"
              ]}
            />
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-danger">
            <InfoCard
              bio={[
                "MY MESSAGE",
                "Christian Wang",
                "https://github.com/Squishy123",
                "/static/bio/christian.jpg"
              ]}
            />
          </article>
        </div>
        <div className="tile is-parent">
          <article className="tile is-child notification is-danger">
            <InfoCard
              bio={[
                "MY MESSAGE",
                "Jeremy Ng",
                "https://github.com/KingJeremyNg",
                "/static/bio/jeremy.jpg"
              ]}
            />
          </article>
        </div>
      </div>
    </Layout>
  );
};
