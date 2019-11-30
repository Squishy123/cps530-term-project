import React from "react";

import Layout from "./layout";

function renderSearch(props) {
    if(props.results) {
        return <>{(props.results.length > 0) ?
            <section className="container mt-30">
                <h1 className="title is-2">Results for {props.word}</h1>
                <div className="columns is-multiline">
                    {props.results.map(res => (
                        <div key={`${res.word}${res.score}`} 
                        className="column is-3">
                            <p className="subtitle is-3">Word: <strong>{res.word}</strong></p>
                            <p className="subtitle is-4">Score: {res.score}</p>
                        </div>
                    ))}
                </div>
            </section>
            :
            <h1 className="title is-2 mt-30">No Results Found!</h1>}</>
    }
}

export default (props) => (
    <Layout title="Demo">
        <section className="hero is-medium is-primary is-bold">
            <div className="hero-body">
                <h1 className="title is-1">SYNO</h1>
                <p className="subtitle is-1">The Synonym Generator</p>
                <form className="container" action="/demo/search">
                    <div className="field is-grouped">
                        <div className="control">
                            <input className="input" name="search" type="text" placeholder="Search" />
                        </div>
                        <div className="control">
                            <button className="button is-link" type="submit">Submit</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
        <section className="hero is-danger is-bold">
        <div className="hero-body">
          <div className="container has-text-centered">
            <h1 className="title is-2 has-text-centered">How it works</h1>

                <p className="subtitle is-5 has-text-centered">
                  It works by using THIS THING, to do THAT THING.
                </p>

          </div>
        </div>
        </section>
        {renderSearch(props)}
        
    </Layout>
)
