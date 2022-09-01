import React from "react"
import './style.css'
import Swim from './swim.png'
import Star from './star.png'

 function Card() {
    return (
        <div className="card">
            <img src={Swim} className="card--image" alt="swim" />
            <div className="card--stats">
                <img src={Star} className="card--star" alt="star" />
                <span>5.0</span>
                <span className="gray">(6) • </span>
                <span className="gray">USA</span>
            </div>
            <p>Life Lessons with Katie Zaferes</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}

export default Card