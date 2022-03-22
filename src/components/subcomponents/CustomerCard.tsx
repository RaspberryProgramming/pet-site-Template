import React from 'react';
import './css/CustomerCard.css';

function CustomerCard(props: {name: string, imgSrc: string, desc: string}) {
  return (
    <div className="CustomerCard">
        <div className="text">
            <h1>{props.name}</h1>
            <p>{props.desc}</p>
        </div>
        <img className="picture" alt={props.name} src={props.imgSrc}/>
    </div>
  );
}

export default CustomerCard;
