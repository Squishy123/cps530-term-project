import React from 'react';

export default (props) => {
    let background = {
        backgroundImage: `url(${props.bio[3]})`
    }

    return (
        <a className="jeremyTest" href={props.bio[2]} target="_blank" style={background}>
            <h1>{props.bio[1]}</h1>
            <p>{props.bio[0]}</p>
        </a>
    )
}