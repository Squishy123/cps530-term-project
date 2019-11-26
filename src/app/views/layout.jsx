import React from 'react';

export default ((props) => (
    <html>
        <head>
            <meta name="viewport" content="width=device-width, inital-scale=1.0"/>
            <title>{`${(props.title) ? props.title + " | " : ""}CPS530-Term-Project`}</title>
        
            <link rel="stylesheet" href="/static/styles.css"></link>
        </head>
        <body>
            {props.children}
        </body>
    </html>
));