import React from "react";
import { NavLink } from "react-router-dom";

function Game(props) {
  const[showReview, setShowReview] = useState(false)

  const {name, price, company, introduction, img} = props.game

  return (
    <div>
      <div className="container">
        <h2>{name}</h2>
        <NavLink to="/"
        <img className="image" src={img} alt={name}/>
        <h3>From: {company}</h3>
        <h4>Price: {price}</h4>
      </div>
      {
        showReview ?
        <Review />
        : null
      }

    </div>
    
  )

}


export default Game;