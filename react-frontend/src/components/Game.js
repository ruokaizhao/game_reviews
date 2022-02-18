import React from "react";
import { Route, NavLink, useRouteMatch, useParams } from "react-router-dom";
import ReviewList from "./ReviewList"

function Game(props) {

  const {name, price, company, introduction, img} = props.game
  const match = useRouteMatch()

  return (
    <div>
      <NavLink to={`/reviews/${name}`}>
        <h2>{name}</h2>
      </NavLink>        
      <h3>From: {company}</h3>
      <h4>Price: {price}</h4>
      <Route path={`/reviews/:gameId`}>
        <ReviewList name={name} introduction={introduction} img={img}/>
      </Route>   
    </div>    
  )
}


export default Game;