import React, { Component } from "react"
import "./list.scss"
function CityListComponent(props) {
    return (
        <div>
            <ol>
                {props.cityData.map((person) => {
                    return (<li key={person.id}>{person.name}</li>)
                })}
            </ol>
        </div>
    );
}
export default CityListComponent;