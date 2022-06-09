import React from "react";
import { Route, Link } from "react-router-dom";
import ReviewList from "./ReviewList"

function Game(props) {

  const {id, name, price, company, introduction, img} = props.game

  return (
    <div className="container">
      <Link to={`/reviews/${name}`}>
        <header><h1>{name}</h1></header>
      </Link>        
      <h4><em>From: {company}</em></h4>
      <h4><em>Price: ${price}</em></h4>
      <Route path="/reviews/:gameId">
        <ReviewList 
        name={name} 
        introduction={introduction} 
        img={img} 
        game_id={id} 
        testUser={props.testUser} 
        />
      </Route>   
    </div>    
  )
}

export default Game;