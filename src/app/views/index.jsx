import React from 'react';

import Layout from './layout';

export default (props) => {
    return (
    <Layout title="Home">
        <h1>{props.message}</h1>
        <p>{JSON.stringify(props.data)}</p>
    </Layout>)
}