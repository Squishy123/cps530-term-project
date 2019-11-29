import React from 'react';

import Layout from './layout';

import InfoCard from './infoCard';

export default (props) => {
    return (
        <Layout title="Home">
            <div className="jeremyContainer jeremyFlexHorizontal">
                <InfoCard bio={["MY MESSAGE", "Adam Aboud", "https://github.com/OneHandKlap", "/static/adam.jpg"]} />
                <InfoCard bio={["MY MESSAGE", "Christian Wang", "https://github.com/Squishy123", "/static/christian.jpg"]} />
                <InfoCard bio={["MY MESSAGE", "Jeremy Ng", "https://github.com/KingJeremyNg", "/static/jeremy.jpg"]} />
            </div>
            <h1>{props.message}</h1>
            <form action="/form">
                <label>Name</label>
                <input type="text" name="name" />
                <input type="submit" value="submit" />
            </form>
            <p>{JSON.stringify(props.data)}</p>
        </Layout>
    )
}