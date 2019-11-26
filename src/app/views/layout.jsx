import React from 'react';

export default ((props) => (
    <html>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <title>{`${(props.title) ? props.title + " | " : ""}CPS530-Term-Project`}</title>
        
            <link rel="stylesheet" href="/static/styles.css"/>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.8.0/css/bulma.min.css"/>
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"/>
        </head>
        <body>
            {props.children}
        </body>
    </html>
));