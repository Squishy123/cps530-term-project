import React from 'react';

export default class Layout extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            isActive: false //flag for mobile menu expand
        }

        this.toggleButton = this.toggleButton.bind(this);
    }

    toggleButton() {
        console.log("Hello")
        this.setState({isActive: !this.state.isActive});
    }

    render() {
        return (
            <html>
                <head>
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>{`${(this.props.title) ? this.props.title + " | " : ""}CPS530-Term-Project`}</title>

                    <link rel="stylesheet" href="/static/styles.css" />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css" />
                    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js" />
                </head>
                <body>
                    <nav className="navbar is-fixed-top">
                        <div className="navbar-brand">
                            <a className="navbar-item">
                                <h1 className="logo">SYNO</h1>
                            </a>
                            <a role="button" className="navbar-burger" onClick={this.toggleButton}>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                                <span aria-hidden="true"></span>
                            </a>
                        </div>
                        <div className="navbar-menu is-active">
                            <div className="navbar-start">
                                <a className="navbar-item">Home</a>
                            </div>
                            <div className="navbar-end">
                                {["Overview", "Installation", "Tutorial", "Demo", "Conclusion", "Credits"].map(p => (
                                    <a key={p} className="navbar-item" href={`/${p}`}>{p}</a>
                                ))}
                            </div>
                        </div>
                    </nav>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

