import React from 'react';
import Card from '../card/card.compo';
import "./cardlist.css"
const  CardList = (props) => {
    return (
        <div className="card-list">
        { props.monsters.map(monster =>
            (
                <Card key={monster.id }monster={monster}/>
            )) }
        </div>
    )
}
export default CardList;