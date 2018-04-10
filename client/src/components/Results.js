import React from "react";

const Results = props => (
    <div className ="row">
 
        {props.results.map(result => (
            <div className="" >
                <img alt={result.name.last} className="img-responsive" src={result.picture.large} />
           
            <h2> {result.name.first} {result.name.last} </h2>
            <p> {result.email} </p>
            <p> {result.location.postcode} </p>
            </div>
            
    ))}

  </div>      
);

export default Results;
