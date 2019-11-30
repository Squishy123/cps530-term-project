import React from "react";

export default props => {
    return (
        <div>
            <figure className="image size-300x300 has-image-centered">
                <img className="image is-rounded" src={props.bio[3]} />
            </figure>
            <section className="section">
                <div className="box">
                    <h1 className="title is-2">{props.bio[1]}</h1>
                    <p className="subtitle is-3">{props.bio[5]}</p>
                    <p className="subtitle is-4">{props.bio[0]}</p>
                    <div className="columns is-mobile">
                        <div className="column is-one-quarter"></div>
                        <div className="column is-one-quarter">
                            <a href={props.bio[2]} target="_blank">
                                <i className="icon fab fa-github fa-3x" />
                            </a>
                        </div>
                        <div className="column is-one-quarter">
                            <a href={props.bio[4]} target="_blank">
                                <i className="icon fab fa-linkedin fa-3x" />
                            </a>
                        </div>
                        <div className="column is-one-quarter"></div>
                    </div>
                </div>
            </section>
        </div>
    );
};
