import React from 'react'
import "./style.css"


export default function Card(props) {
    return (
        <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2`} height="180" width="180"/>
           <h1 > {props.monster.name} </h1>    
           <p>{props.monster.email}</p>         
        </div>
    )
}
