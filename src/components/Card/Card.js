import React from 'react';
import './Card.css';

const Card = ( props ) => (

    <div className="card">
        <div className="card__body">
            <img src={props.img} class="card__image" alt="{props.title}"/>
            <h2 className="card__title">{props.title}</h2>
            <p className="card__description">{props.description}</p>
        </div>
        <button className="card__btn">Saiba mais</button>
    </div>

);

export default Card;