import React from 'react';

export default (props) => {
    return (<div>
        <h1>{props.message}</h1>
        <p>{JSON.stringify(props.data)}</p>
    </div>)
}