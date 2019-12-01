import React from "react";

import Layout from "./layout";

export default props => (
    <Layout title="Tutorial">
        <section className="hero is-medium is-primary is-bold">
            <div className="hero-body">
                <h1 className="title is-1">Tutorial</h1>
                <p className="subtitle is-2">
                    How to build an interactive MVC web-application with
            <strong> Ronin</strong> and <strong>React</strong>
                </p>
            </div>
        </section>
        <div style={{ height: '100px' }} />
        <section className="container">
            <h1 className="title is-2">Prerequisites</h1>
            <p className="subtitle is-3">
                To follow this tutorial, you will need the following:
            </p>
            <ol>
                <li className="subtitle is-4">
                    A NodeJS installation, which you can
                    get <a href="https://nodejs.org/en/download/">here</a>
                </li>
                <li className="subtitle is-4">
                    A NodeJS installation, which you can
                    get <a href="https://nodejs.org/en/download/">here</a>
                </li>
            </ol>
        </section>
    </Layout>
)