import React from "react"
import './style.css'
import Swim from '../../img/swim.png'
import Star from '../../img/star.png'

 function Card(props) {
    return (
        <div className="card">
            {props.openSpots === 0 && <div className="card--badge">SOLD OUT</div>}
            <img src={Swim} className="card--image" alt="swim" />
            <div className="card--stats">
                <img src={Star} className="card--star" alt="star" />
                <span>{props.rating}</span>
                <span className="gray">({props.review}) .</span>
                <span className="gray">({props.country})</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> /person</p>
        </div>
    )
}

export default Card