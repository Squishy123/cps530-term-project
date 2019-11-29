import React from "react";

export default class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false // flag for mobile menu expand
    };

    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton() {
    console.log("Hello");
    this.setState({ isActive: !this.state.isActive });
  }

  render() {
    return (
      <Layout title="Installation">
        <section className="hero is-medium is-info">
          <div className="hero-body">
            <h1 className="title is-1">Getting Started</h1>
            <p className="subtitle is-2">
              Lets see how to install and implement React, Ronin, and Node.Js
              <strong>frameworks</strong> used in this project
            </p>
          </div>
        </section>
      </Layout>
    );
  }
}
