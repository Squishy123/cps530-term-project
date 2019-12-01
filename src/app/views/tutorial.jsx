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
            <h1 className="title is-2">What are we building?</h1>
            <p className="subtitle is-3">
                A synonym generator powered by Ronin and React
            </p>
            <p className="subtitle is-4">Check out the live demo <a href="/demo">here</a></p>
            <p className="subtitle is-4">Public repository available <a href="https://github.com/Squishy123/synonym-generator">here</a></p>
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
                    A Text editor like <a href="https://code.visualstudio.com/">Visual Studio Code</a>
                </li>
            </ol>
        </section>
        <section className="container mt-50">
            <h1 className="title is-3">Step 1: Setting up Ronin</h1>
            <section>
                <p className="is-size-4">
                    To get started, install the Ronin-CLI tool.
                </p>
                <article className="media">
                    <code className="media-content is-size-4">
                        npm i ronin-cli -g
                </code>
                </article>
            </section>
            <section className="mt-40">
                <div className="columns is-multiline">
                    <div className="column">
                        <p className="is-size-4">
                            Next create a new Ronin project by templating the <a href="https://github.com/Squishy123/ronin-react-view-starter">Ronin-React-View-Starter</a>
                        </p>
                        <article className="media">
                            <img className="tut-image" src="/static/tutorial/template-1.png" />
                        </article>
                    </div>
                    <div className="column">
                        <p className="is-size-4">
                            Fill in the name and description and then create the new repo
                </p>
                        <article className="media">
                            <img className="tut-image" src="/static/tutorial/template-2.png" />
                        </article>
                    </div>
                </div>
            </section>
            <section className="mt-40">
                <p className="is-size-4">
                    Now clone the repository you just made(change username to your github username):
                </p>
                <article className="media">
                    <code className="media-content is-size-4">
                        git clone https://github.com/%USERNAME%/synonym-generator.git
                    </code>
                </article>
            </section>
            <section className="mt-40">
                <p className="is-size-4">
                    Navigate into your directory and install npm dependencies:
                </p>
                <article className="media">
                    <code className="media-content is-size-4">
                        cd synonym-generator && npm install
                    </code>
                </article>
            </section>
        </section>
        <section className="container mt-50">
            <h1 className="title is-3">Step 2: Creating the Application</h1>
            <section>
                <p className="is-size-4">
                    Install node-fetch
                </p>
                <article className="media">
                    <code className="media-content is-size-4">
                        npm i node-fetch
                </code>
                </article>
            </section>
            <section className="mt-30">
                <p className="is-size-4">
                    Add Bulma CSS and Normalize CSS to your layout.jsx file found in /src/app/views/layout.jsx:
                </p>
                <article className="media">
                    <pre>
                        <code className="html media-content is-size-6">
                            {
                                `import React from 'react';

export default ((props) => (
    <html>
        <head>
            <meta name="viewport" content="width=device-width, inital-scale=1.0" />
            <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
            />
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"
            />
            <title>{props.title}</title>
        </head>
        <body>
            {props.children}
        </body>
    </html>
));`
                            }
                        </code>
                    </pre>
                </article>
            </section>
            <section className="mt-30">
                <p className="is-size-4">
                    Replace the index.jsx file found in /src/app/views/index.jsx with the following:
                </p>
                <article className="media">
                    <pre>
                        <code className="html media-content is-size-6">
                            {`
import React from "react";

import Layout from "./layout";

function renderSearch(props) {
    if(props.results) {
        return <>{(props.results.length > 0) ?
            <section className="container mt-30">
                <h1 className="title is-2">Results for {props.word}</h1>
                <div className="columns is-multiline">
                    {props.results.map(res => (
                        <div key={res.word + res.score}} 
                        className="column is-3">
                            <p className="subtitle is-3">Word: <strong>{res.word}</strong></p>
                            <p className="subtitle is-4">Score: {res.score}</p>
                        </div>
                    ))}
                </div>
            </section>
            :
            <h1 className="title is-2 mt-30">No Results Found!</h1>}</>
    }
}

export default (props) => (
    <Layout title="Demo">
        <section className="hero is-medium is-primary is-bold">
            <div className="hero-body">
                <h1 className="title is-1">SYNO</h1>
                <p className="subtitle is-1">The Synonym Generator</p>
                <form className="container" action="/search">
                    <div className="field is-grouped">
                        <div className="control">
                            <input className="input" name="search" type="text" placeholder="Search" />
                        </div>
                        <div className="control">
                            <button className="button is-link" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
        {renderSearch(props)}
    </Layout>
)
`
                            }
                        </code>
                    </pre>
                </article>
            </section>
            <section className="mt-30">
                <p className="is-size-4">
                    Now create a new ronin-component to handle searching:
                </p>
                <article className="media">
                    <code className="media-content is-size-4">
                        ronin make:route Search GET /search
                    </code>
                </article>
            </section>
            <section className="mt-30">
                <p className="is-size-4">
                    Replace the content of the search.js found at /src/app/routes/search.js with the following:
                </p>
                <article className="media">
                    <pre>
                        <code className="html media-content is-size-6">
                            {
                                `
const fetch = require('node-fetch');

const Search = {
    method: "GET",
    enabled: true,
    path: "/search",
    handler: [
      async (req, res) => {
        let results = await fetch(
          "https://api.datamuse.com/words?rel_syn="+req.params.search"
        ).then(r => r.json());
        res.render("index", { word: req.params.search, results: results });
        return true;
      }
    ]
}

export default Search;
`
                            }
                        </code>
                    </pre>
                </article>
            </section>
        </section>
        <section className="container mt-50">
            <h1 className="title is-3">Step 3: Running the Application</h1>
            <section>
                <p className="is-size-4">
                    Copy environment variables for development and production
                </p>
                <article className="media">
                    <code className="media-content is-size-4">
                        cp .env.example .env.dev && cp .env.example .env.prod
                    </code>
                </article>
                <p className="is-size-4 mt-30">
                    Change port field accordingly:
                </p>
                <article className="media">
                    <pre>
                        <code className="text media-content is-size-4">
                            {`DB_URL=mongodb://localhost:27017
PORT=3000
EMAIL_HOST=
EMAIL_USER=
EMAIL_PASS=
`}
                        </code>
                    </pre>
                </article>
                <p className="is-size-4 mt-30">
                    To run in development: run the following:
                </p>
                <article className="media">
                    <code className="media-content is-size-4">
                        npm run dev
                    </code>
                </article>
                <p className="is-size-4 mt-30">
                    To run in production: run the following:
                </p>
                <article className="media">
                    <code className="media-content is-size-4">
                        npm run start
                    </code>
                </article>
            </section>
        </section>
    </Layout>
)