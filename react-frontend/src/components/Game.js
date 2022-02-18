import React from "react";
import { Route, NavLink } from "react-router-dom";
import ReviewList from "./ReviewList"

function Game(props) {

  const {game_id, name, price, company, introduction, img} = props.game

  return (
    <div>
      <NavLink to={`/reviews/${name}`}>
        <h2>{name}</h2>
      </NavLink>        
      <h3>From: {company}</h3>
      <h4>Price: {price}</h4>
      <Route path={`/reviews/:gameId`}>
        <ReviewList name={name} introduction={introduction} img={img} game_id={game_id} testUser={props.testUser} />
      </Route>   
    </div>    
  )
}


export default Game;