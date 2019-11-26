import React from 'react';

import Layout from './layout';

export default (props) => {
    return (
        <Layout title="Home">
            <h1>{props.message}</h1>
            <form action="/form">
                <label>Name</label>
                <input type="text" name="name"/>
                <input type="submit" value="submit"/>
            </form>
            <p>{JSON.stringify(props.data)}</p>
        </Layout>)
}