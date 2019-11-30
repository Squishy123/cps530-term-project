import React from "react";

import Layout from "./layout";

import InfoCard from "./infoCard";

export default props => {
    return (
        <Layout title="Credits">
            <div className="hero">
                <div className="hero-body">
                    <h1 className="title is-1 has-text-centered">The Team</h1>
                </div>
            </div>
            <div className="container">
                <section className="section">
                    <div className="tile is-ancestor has-text-centered columns is-multiline">
                        <div className="tile is-parent column">
                            <article className="tile is-child">
                                <InfoCard
                                    bio={[
                                        "Lives at the corner of getting stuff done and eating pizza.",
                                        "Adam Aboud",
                                        "https://github.com/OneHandKlap",
                                        "/static/bio/adam.jpg",
                                        "https://www.linkedin.com/in/adam-aboud/"
                                    ]}
                                />
                            </article>
                        </div>
                        <div className="tile is-parent column">
                            <article className="tile is-child">
                                <InfoCard
                                    bio={[
                                        "VSCode bug catcher extraordinaire.",
                                        "Christian Wang",
                                        "https://github.com/Squishy123",
                                        "/static/bio/christian.jpg",
                                        "https://www.linkedin.com/in/christian-gnaw/"
                                    ]}
                                />
                            </article>
                        </div>
                        <div className="tile is-parent column">
                            <article className="tile is-child">
                                <InfoCard
                                    bio={[
                                        "Struggling to get this project done.",
                                        "Jeremy Ng",
                                        "https://github.com/KingJeremyNg",
                                        "/static/bio/jeremy.jpg",
                                        "https://www.linkedin.com/in/kingjeremyng/"
                                    ]}
                                />
                            </article>
                        </div>
                    </div>
                </section>
            </div>
        </Layout>
    );
};
