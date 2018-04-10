import React from "react";

const Results = props => (
    <div>

        {props.results.map(result => (
            <div className="list-group-item" key={result.id}>
                <img alt={result.name.last} className="img-responsive" src={result.picture.thumbnail} />

            <h2> {result.name.first} {result.name.last} </h2>
            <p> {result.email} </p>
            <p> {result.location.postcode} </p>
            <button onClick={props.onClick(result)}>Keep</button>
            </div>

    ))}

  </div>
);

export default Results;
