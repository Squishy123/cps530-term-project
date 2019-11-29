import React from "react";

export default props => {
  // let background = {
  //     backgroundImage: `url(${props.bio[3]})`
  // }

  return (
    <div>
      <h1>{props.bio[1]}</h1>
      <p>{props.bio[0]}</p>
      <figure class="image is-128x128">
        <img class="image is-square is-rounded" src={props.bio[3]} />
      </figure>
    </div>
  );
};
