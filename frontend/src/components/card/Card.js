import React from 'react';
import './Card.css';

const card = (props) => (
    <div className="card md-3 card-width mx-auto center">
        <img src={props.picture} className="card-img-top img-size text-center mx-auto"/>
        <div className="card-body">
            <h5 className="card-title">{props.name}</h5>
            <p className="card-text">{props.description}</p>
        </div>
        <ul class="list-group list-group-flush">
            <li class="list-group-item"><b>Start:</b> {props.event_start}</li>
            <li class="list-group-item"><b>End:</b> {props.event_end}</li>
        </ul>
    </div>
);

export default card;