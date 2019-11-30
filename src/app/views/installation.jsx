import React from "react";
import Layout from "./layout";

export default props => {
  return (
    <Layout title="Installation">
      <section className="hero is-medium is-info">
        <div className="hero-body">
          <h1 className="title is-1">Getting Started</h1>
          <p className="subtitle is-2">
            Let's see how to install and implement Node.js, Ronin, and React
          </p>
        </div>
      </section>
      <section className="columns mt-30">
        <div className="column is-4">
        <div className="card-content">
          <div className="content">
            <p className="title is-4" >Node.js</p>
              <p>Node.js (Node) is an open source development platform for executing JavaScript code server-side. Node is useful for developing applications that require a persistent connection from the browser to the server and is often used for real-time applications such as chat, news feeds and web push notifications.
              </p>
              <ol>
                <li>Go to: <a href="https://nodejs.org/en/">https://nodejs.org/en/</a> and select the version you want to download</li>
                <div>
                  <img src="/static/install/node_options.png" width="600" height="480"></img>
                </div>
                <li>Open the .msi file to start installation and follow all the prompts.</li>
                <img src ="https://www.guru99.com/images/NodeJS/010716_0458_DownloadIns2.png"></img>
              </ol>
            </div>
          </div>
        </div>
        <div className="column is-4">
        <div className="card-content">
          <div className="content">
            <p className="title is-4">Ronin</p>
              <p>
              Ronin is a back-end framework powered by Node.js It provides a variety of generative tools to help developers build server applications with ease.
              </p>
              <ol>
                <li>First, install dependencies. NPM or (Node.js Package Manager) will take care of that for us. Open a terminal and navigate to the directory of your project, then:
                <pre class = "gatsby-code-bash">
                <strong>npm install</strong>
                </pre>
                </li>
                <li>Now copy and configure environment variables by entering:
                <pre class = "gatsby-code-bash">
                <strong>cp .env.example .env.dev && cp .env.example .env.prod</strong>
                </pre>
                </li>
                <li>Install the Ronin-CLI by entering:</li>
                <pre class = "gatsby-code-bash">
                <strong>npm install -g ronin-cli</strong>
                </pre>
                <li>We are finally ready to open our development environment:</li>
                <pre class = "gatsby-code-bash">
                <strong>npm run dev</strong>
                </pre>
              </ol>
            </div>
          </div>
        </div>
      <div className = "column is-4">
        <div className="card-content">
          <div className="content">
            <p className="title is-4">React</p>
              <p>
                The "Create React App" is a user-friendly environment for building a new project with React. <em>You will need to have Node.js already installed and with a version after 8.10 and npm with a version after 5.6</em>
              </p>
              <ol>
                <li>Open a terminal and navigate to a directory you want to orient your project in</li>
                <li>Enter the following into the command line</li>
                </ol>
              <pre class = "gatsby-code-bash">
                <strong>npx create-react-app my-app</strong>
              </pre>
              <ol>
                <li value="3">Once it has finished building your environment, enter the following:</li>
              </ol>
              <pre class = "gatsby-code-bash">
                <strong>cd my-app</strong>
              </pre>
              <pre class = "gatsby-code-bash">
                <strong>npm start</strong>
              </pre>
              <ol>
                <li value="4">The whole process should look something like this:</li>
              </ol>
              <img src = "https://cdn.rawgit.com/facebook/create-react-app/27b42ac/screencast.svg" alt="npm create" width="600"></img>
          </div>
        </div>
      </div>
      </section>
      
    </Layout>
  );
};
