import React, { Component } from "react"
import "./city.scss"
function CityList(props) {
    return (
        <div>
            <ol>
                {props.city.map((person) => {
                    return (<li key={person.id}>{person.name}</li>)
                })}
            </ol>
        </div>
    );
}
export default CityList;